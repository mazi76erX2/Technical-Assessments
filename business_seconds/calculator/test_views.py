"""
Tests for business seconds calculator API views.
"""

import pytest
from django.test import TestCase, Client
from django.urls import reverse
from urllib.parse import urlencode


class TestBusinessSecondsAPI(TestCase):
    """Test cases for the business seconds API endpoint."""
    
    def setUp(self):
        """Set up test client."""
        self.client = Client()
        self.url = '/api/business-seconds/'
    
    def test_calculate_business_seconds_success(self):
        """Test successful calculation with valid ISO-8601 datetime strings."""
        params = {
            'start_time': '2024-03-19T09:00:00',
            'end_time': '2024-03-19T13:00:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 200
        assert response.content.decode() == '14400'  # 4 hours in seconds
        assert response['content-type'] == 'text/plain'
    
    def test_calculate_business_seconds_with_timezone(self):
        """Test calculation with timezone-aware ISO-8601 strings."""
        params = {
            'start_time': '2024-03-19T09:00:00+02:00',
            'end_time': '2024-03-19T13:00:00+02:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 200
        assert response.content.decode() == '14400'  # 4 hours in seconds
    
    def test_calculate_business_seconds_with_z_suffix(self):
        """Test calculation with Z suffix (UTC) ISO-8601 strings."""
        params = {
            'start_time': '2024-03-19T07:00:00Z',  # 9:00 AM SAST (UTC+2)
            'end_time': '2024-03-19T11:00:00Z'     # 1:00 PM SAST (UTC+2)
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 200
        assert response.content.decode() == '14400'  # 4 hours in seconds
        assert response['content-type'] == 'text/plain'
    
    def test_calculate_business_seconds_multiple_days(self):
        """Test calculation across multiple days."""
        params = {
            'start_time': '2024-03-19T14:00:00',  # Tuesday 2:00 PM
            'end_time': '2024-03-20T10:00:00'     # Wednesday 10:00 AM
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 200
        # Tuesday: 14:00-17:00 = 3 hours = 10800 seconds
        # Wednesday: 08:00-10:00 = 2 hours = 7200 seconds
        # Total: 18000 seconds
        assert response.content.decode() == '18000'
    
    def test_calculate_business_seconds_weekend(self):
        """Test calculation that only spans weekend."""
        params = {
            'start_time': '2024-03-16T10:00:00',  # Saturday
            'end_time': '2024-03-17T15:00:00'     # Sunday
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 200
        assert response.content.decode() == '0'  # No business seconds on weekend
    
    def test_missing_start_time_parameter(self):
        """Test error when start_time parameter is missing."""
        params = {
            'end_time': '2024-03-19T13:00:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 400
        assert 'Missing required parameters' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_missing_end_time_parameter(self):
        """Test error when end_time parameter is missing."""
        params = {
            'start_time': '2024-03-19T09:00:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 400
        assert 'Missing required parameters' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_missing_both_parameters(self):
        """Test error when both parameters are missing."""
        response = self.client.get(self.url)
        
        assert response.status_code == 400
        assert 'Missing required parameters' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_invalid_start_time_format(self):
        """Test error with invalid start_time format."""
        params = {
            'start_time': 'invalid-datetime',
            'end_time': '2024-03-19T13:00:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 400
        assert 'Invalid datetime format' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_invalid_end_time_format(self):
        """Test error with invalid end_time format."""
        params = {
            'start_time': '2024-03-19T09:00:00',
            'end_time': 'invalid-datetime'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 400
        assert 'Invalid datetime format' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_start_time_after_end_time(self):
        """Test error when start_time is after end_time."""
        params = {
            'start_time': '2024-03-19T15:00:00',
            'end_time': '2024-03-19T10:00:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 400
        assert 'Invalid time range' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_equal_start_and_end_time(self):
        """Test error when start_time equals end_time."""
        params = {
            'start_time': '2024-03-19T10:00:00',
            'end_time': '2024-03-19T10:00:00'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 400
        assert 'Invalid time range' in response.content.decode()
        assert response['content-type'] == 'text/plain'
    
    def test_only_get_requests_allowed(self):
        """Test that only GET requests are allowed."""
        params = {
            'start_time': '2024-03-19T09:00:00',
            'end_time': '2024-03-19T13:00:00'
        }
        
        # Test POST request
        response = self.client.post(self.url, params)
        assert response.status_code == 405  # Method Not Allowed
        
        # Test PUT request
        response = self.client.put(self.url, urlencode(params), 
                                 content_type='application/x-www-form-urlencoded')
        assert response.status_code == 405  # Method Not Allowed
        
        # Test DELETE request
        response = self.client.delete(self.url)
        assert response.status_code == 405  # Method Not Allowed
    
    def test_microseconds_in_datetime(self):
        """Test handling of microseconds in datetime strings."""
        params = {
            'start_time': '2024-03-19T09:00:00.123456',
            'end_time': '2024-03-19T13:00:00.654321'
        }
        
        response = self.client.get(self.url, params)
        
        assert response.status_code == 200
        assert response.content.decode() == '14400'  # 4 hours in seconds (microseconds ignored)
    
    def test_different_iso8601_formats(self):
        """Test various valid ISO-8601 datetime formats."""
        test_cases = [
            # Basic format
            ('2024-03-19T09:00:00', '2024-03-19T13:00:00'),
            # With milliseconds
            ('2024-03-19T09:00:00.000', '2024-03-19T13:00:00.000'),
            # With timezone offset
            ('2024-03-19T09:00:00+02:00', '2024-03-19T13:00:00+02:00'),
            # UTC timezone
            ('2024-03-19T07:00:00Z', '2024-03-19T11:00:00Z'),
        ]
        
        for start_time, end_time in test_cases:
            with self.subTest(start_time=start_time, end_time=end_time):
                params = {
                    'start_time': start_time,
                    'end_time': end_time
                }
                
                response = self.client.get(self.url, params)
                
                assert response.status_code == 200
                # Should be 4 hours = 14400 seconds for all cases
                assert response.content.decode() == '14400'

"""
Tests for business seconds calculator services.
"""

import pytest
from datetime import datetime, date, time, timezone, timedelta
from unittest.mock import patch, Mock
import requests

from calculator.services import BusinessSecondsCalculator


class TestBusinessSecondsCalculator:
    """Test cases for BusinessSecondsCalculator."""
    
    def setup_method(self):
        """Clear cache before each test."""
        BusinessSecondsCalculator.clear_holiday_cache()
    
    def test_convert_to_sast_naive_datetime(self):
        """Test converting naive datetime to SAST."""
        naive_dt = datetime(2024, 8, 26, 10, 30, 0)
        result = BusinessSecondsCalculator.convert_to_sast(naive_dt)
        
        assert result.tzinfo == BusinessSecondsCalculator.SAST_TIMEZONE
        assert result.hour == 10
        assert result.minute == 30
    
    def test_convert_to_sast_utc_datetime(self):
        """Test converting UTC datetime to SAST."""
        utc_dt = datetime(2024, 8, 26, 8, 30, 0, tzinfo=timezone.utc)
        result = BusinessSecondsCalculator.convert_to_sast(utc_dt)
        
        # UTC+0 to SAST (UTC+2) should add 2 hours
        assert result.hour == 10
        assert result.minute == 30
    
    @patch('calculator.services.requests.get')
    def test_fetch_holidays_from_api_success(self, mock_get):
        """Test successful API call for holidays."""
        # Mock successful API response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'holidays': [
                {'date': '2024-01-01', 'name': "New Year's Day"},
                {'date': '2024-12-25', 'name': 'Christmas Day'},
            ]
        }
        mock_get.return_value = mock_response
        
        holidays = BusinessSecondsCalculator._fetch_holidays_from_api(2024)
        
        expected = {date(2024, 1, 1), date(2024, 12, 25)}
        assert holidays == expected
    
    @patch('calculator.services.requests.get')
    def test_fetch_holidays_from_api_failure(self, mock_get):
        """Test API failure falls back to hardcoded holidays."""
        # Mock API failure
        mock_get.side_effect = requests.RequestException("API unavailable")
        
        holidays = BusinessSecondsCalculator._fetch_holidays_from_api(2024)
        
        # Should fall back to hardcoded holidays for 2024
        assert date(2024, 1, 1) in holidays
        assert date(2024, 12, 25) in holidays
        assert len(holidays) == 12  # All 2024 holidays
    
    @patch('calculator.services.requests.get')
    def test_is_business_day_weekday_no_holiday(self, mock_get):
        """Test weekday that's not a holiday."""
        # Mock empty holiday response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {'holidays': []}
        mock_get.return_value = mock_response
        
        # Monday, August 26, 2024
        result = BusinessSecondsCalculator.is_business_day(date(2024, 8, 26))
        assert result is True
        # Monday, August 26, 2024
        result = BusinessSecondsCalculator.is_business_day(date(2024, 8, 26))
        assert result is True
    
    def test_is_business_day_weekend(self):
        """Test weekend day."""
        # Saturday, August 24, 2024
        result = BusinessSecondsCalculator.is_business_day(date(2024, 8, 24))
        assert result is False
        
        # Sunday, August 25, 2024
        result = BusinessSecondsCalculator.is_business_day(date(2024, 8, 25))
        assert result is False
    
    @patch('calculator.services.requests.get')
    def test_is_business_day_holiday(self, mock_get):
        """Test holiday detection."""
        # Mock holiday response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'holidays': [
                {'date': '2024-12-25', 'name': 'Christmas Day'}
            ]
        }
        mock_get.return_value = mock_response
        
        result = BusinessSecondsCalculator.is_business_day(date(2024, 12, 25))
        assert result is False
    
    def test_is_business_time(self):
        """Test business time validation."""
        assert BusinessSecondsCalculator.is_business_time(time(8, 0)) is True
        assert BusinessSecondsCalculator.is_business_time(time(12, 30)) is True
        assert BusinessSecondsCalculator.is_business_time(time(16, 59)) is True
        assert BusinessSecondsCalculator.is_business_time(time(17, 0)) is False
        assert BusinessSecondsCalculator.is_business_time(time(7, 59)) is False
        assert BusinessSecondsCalculator.is_business_time(time(18, 0)) is False
    
    @patch('calculator.services.requests.get')
    def test_get_business_seconds_in_day_full_day(self, mock_get):
        """Test full business day calculation."""
        # Mock no holidays
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {'holidays': []}
        mock_get.return_value = mock_response
        
        # Monday, August 26, 2024
        result = BusinessSecondsCalculator.get_business_seconds_in_day(date(2024, 8, 26))
        
        # 9 hours * 3600 seconds = 32400 seconds
        assert result == 32400
    
    def test_get_business_seconds_in_day_weekend(self):
        """Test weekend day returns 0."""
        # Saturday, August 24, 2024
        result = BusinessSecondsCalculator.get_business_seconds_in_day(date(2024, 8, 24))
        assert result == 0
    
    @patch('calculator.services.requests.get')
    def test_calculate_business_seconds_same_day(self, mock_get):
        """Test calculation for same day."""
        # Mock no holidays
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {'holidays': []}
        mock_get.return_value = mock_response
        
        start = datetime(2024, 8, 26, 9, 0, 0, tzinfo=timezone.utc)  # 11:00 SAST
        end = datetime(2024, 8, 26, 13, 0, 0, tzinfo=timezone.utc)    # 15:00 SAST
        
        result = BusinessSecondsCalculator.calculate_business_seconds(start, end)
        
        # 4 hours * 3600 seconds = 14400 seconds
        assert result == 14400
    
    def test_calculate_business_seconds_invalid_range(self):
        """Test error when start is after end."""
        start = datetime(2024, 8, 26, 17, 0, 0)
        end = datetime(2024, 8, 26, 9, 0, 0)
        
        with pytest.raises(ValueError, match="start_datetime must be before end_datetime"):
            BusinessSecondsCalculator.calculate_business_seconds(start, end)
    
    def test_clear_holiday_cache(self):
        """Test cache clearing functionality."""
        # Populate cache
        BusinessSecondsCalculator._holiday_cache[2024] = {date(2024, 1, 1)}
        assert len(BusinessSecondsCalculator._holiday_cache) == 1
        
        # Clear cache
        BusinessSecondsCalculator.clear_holiday_cache()
        assert len(BusinessSecondsCalculator._holiday_cache) == 0

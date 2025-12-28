"""
Business seconds calculation service.

This module contains the core business logic for calculating business seconds
between two given times, considering South African public holidays and 
business hours (08:00-17:00, Monday-Friday).
"""

import requests
from datetime import datetime, date, time, timedelta, timezone
from typing import List, Dict, Set
import logging
from django.conf import settings

logger = logging.getLogger(__name__)


class BusinessSecondsCalculator:
    """Calculator for business seconds between two datetime objects."""
    
    # Business hours: 08:00 to 17:00
    BUSINESS_START_HOUR = 8
    BUSINESS_END_HOUR = 17
    
    # South African Standard Time (SAST) UTC+2
    SAST_TIMEZONE = timezone(timedelta(hours=2))
    
    # Cache for holiday data to avoid repeated API calls
    _holiday_cache: Dict[int, Set[date]] = {}
    
    @classmethod
    def _fetch_holidays_from_api(cls, year: int) -> Set[date]:
        """
        Fetch South African public holidays for a given year from Holiday API.
        
        Args:
            year: The year to fetch holidays for
            
        Returns:
            Set of holiday dates for the given year
        """
        try:
            url = "https://holidayapi.com/v1/holidays"
            params = {
                'country': 'ZA',  # South Africa
                'year': year,
                'format': 'json'
            }
            
            # Add API key if available
            api_key = getattr(settings, 'HOLIDAY_API_KEY', None)
            if api_key:
                params['key'] = api_key
            
            response = requests.get(url, params=params, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                holidays = set()
                
                for holiday in data.get('holidays', []):
                    holiday_date = datetime.strptime(holiday['date'], '%Y-%m-%d').date()
                    holidays.add(holiday_date)
                
                logger.info(f"Fetched {len(holidays)} holidays for {year} from Holiday API")
                return holidays
            else:
                logger.warning(f"Holiday API returned status {response.status_code} for year {year}")
                return cls._get_fallback_holidays(year)
                
        except requests.RequestException as e:
            logger.warning(f"Failed to fetch holidays from API for year {year}: {e}")
            return cls._get_fallback_holidays(year)
        except Exception as e:
            logger.error(f"Unexpected error fetching holidays for year {year}: {e}")
            return cls._get_fallback_holidays(year)
    
    @classmethod
    def _get_fallback_holidays(cls, year: int) -> Set[date]:
        """
        Fallback hardcoded holidays when API is unavailable.
        
        Args:
            year: The year to get holidays for
            
        Returns:
            Set of holiday dates for the given year
        """
        # Fallback to hardcoded holidays for known years
        fallback_holidays = {
            2024: {
                date(2024, 1, 1),   # New Year's Day
                date(2024, 3, 21),  # Human Rights Day
                date(2024, 3, 29),  # Good Friday
                date(2024, 4, 1),   # Family Day
                date(2024, 4, 27),  # Freedom Day
                date(2024, 5, 1),   # Workers' Day
                date(2024, 6, 16),  # Youth Day
                date(2024, 8, 9),   # National Women's Day
                date(2024, 9, 24),  # Heritage Day
                date(2024, 12, 16), # Day of Reconciliation
                date(2024, 12, 25), # Christmas Day
                date(2024, 12, 26), # Day of Goodwill
            },
            2025: {
                date(2025, 1, 1),   # New Year's Day
                date(2025, 3, 21),  # Human Rights Day
                date(2025, 4, 18),  # Good Friday
                date(2025, 4, 21),  # Family Day
                date(2025, 4, 27),  # Freedom Day
                date(2025, 5, 1),   # Workers' Day
                date(2025, 6, 16),  # Youth Day
                date(2025, 8, 9),   # National Women's Day
                date(2025, 9, 24),  # Heritage Day
                date(2025, 12, 16), # Day of Reconciliation
                date(2025, 12, 25), # Christmas Day
                date(2025, 12, 26), # Day of Goodwill
            },
            2026: {
                date(2026, 1, 1),   # New Year's Day
                date(2026, 3, 21),  # Human Rights Day
                date(2026, 4, 3),   # Good Friday
                date(2026, 4, 6),   # Family Day
                date(2026, 4, 27),  # Freedom Day
                date(2026, 5, 1),   # Workers' Day
                date(2026, 6, 16),  # Youth Day
                date(2026, 8, 9),   # National Women's Day
                date(2026, 9, 24),  # Heritage Day
                date(2026, 12, 16), # Day of Reconciliation
                date(2026, 12, 25), # Christmas Day
                date(2026, 12, 26), # Day of Goodwill
            }
        }
        
        holidays = fallback_holidays.get(year, set())
        if holidays:
            logger.info(f"Using fallback holidays for {year}: {len(holidays)} holidays found")
        else:
            logger.warning(f"No fallback holidays available for year {year}")
        
        return holidays
    
    @classmethod
    def _get_holidays_for_year(cls, year: int) -> Set[date]:
        """
        Get holidays for a given year, using cache when available.
        
        Args:
            year: The year to get holidays for
            
        Returns:
            Set of holiday dates for the given year
        """
        if year not in cls._holiday_cache:
            cls._holiday_cache[year] = cls._fetch_holidays_from_api(year)
        
        return cls._holiday_cache[year]
    
    @classmethod
    def convert_to_sast(cls, dt: datetime) -> datetime:
        """Convert datetime to South African Standard Time (SAST)."""
        if dt.tzinfo is None:
            # Assume naive datetime is already in SAST
            return dt.replace(tzinfo=cls.SAST_TIMEZONE)
        else:
            # Convert timezone-aware datetime to SAST
            return dt.astimezone(cls.SAST_TIMEZONE)
    
    @classmethod
    def is_business_day(cls, date_obj: date) -> bool:
        """Check if a given date is a business day (weekday and not a holiday)."""
        # Check if it's a weekend (Saturday = 5, Sunday = 6)
        if date_obj.weekday() >= 5:
            return False
            
        # Check if it's a public holiday
        holidays = cls._get_holidays_for_year(date_obj.year)
        if date_obj in holidays:
            return False
            
        return True
    
    @classmethod
    def is_business_time(cls, time_obj: time) -> bool:
        """Check if a given time is within business hours (08:00-17:00)."""
        return cls.BUSINESS_START_HOUR <= time_obj.hour < cls.BUSINESS_END_HOUR
    
    @classmethod
    def get_business_seconds_in_day(cls, date_obj: date, start_time: time = None, end_time: time = None) -> int:
        """
        Calculate business seconds for a specific day.
        
        Args:
            date_obj: The date to calculate for
            start_time: Optional start time (default: 08:00:00)
            end_time: Optional end time (default: 17:00:00)
            
        Returns:
            Number of business seconds in the day
        """
        if not cls.is_business_day(date_obj):
            return 0
        
        # Set default business hours
        if start_time is None:
            start_time = time(cls.BUSINESS_START_HOUR, 0, 0)
        if end_time is None:
            end_time = time(cls.BUSINESS_END_HOUR, 0, 0)
        
        # Ensure times are within business hours
        business_start = time(cls.BUSINESS_START_HOUR, 0, 0)
        business_end = time(cls.BUSINESS_END_HOUR, 0, 0)
        
        effective_start = max(start_time, business_start)
        effective_end = min(end_time, business_end)
        
        # If end is before or equal to start, no business seconds
        if effective_end <= effective_start:
            return 0
        
        # Calculate the difference in seconds
        start_datetime = datetime.combine(date_obj, effective_start)
        end_datetime = datetime.combine(date_obj, effective_end)
        
        return int((end_datetime - start_datetime).total_seconds())
    
    @classmethod
    def calculate_business_seconds(cls, start_datetime: datetime, end_datetime: datetime) -> int:
        """
        Calculate total business seconds between two datetime objects.
        
        Args:
            start_datetime: Start datetime (must be before end_datetime)
            end_datetime: End datetime
            
        Returns:
            Total number of business seconds
            
        Raises:
            ValueError: If start_datetime is not before end_datetime
        """
        if start_datetime >= end_datetime:
            raise ValueError("start_datetime must be before end_datetime")
        
        # Convert both datetimes to SAST
        start_sast = cls.convert_to_sast(start_datetime)
        end_sast = cls.convert_to_sast(end_datetime)
        
        total_seconds = 0
        current_date = start_sast.date()
        end_date = end_sast.date()
        
        while current_date <= end_date:
            if current_date == start_sast.date() == end_sast.date():
                # Both start and end are on the same day
                total_seconds += cls.get_business_seconds_in_day(
                    current_date, 
                    start_sast.time(), 
                    end_sast.time()
                )
            elif current_date == start_sast.date():
                # First day - from start time to end of business day
                total_seconds += cls.get_business_seconds_in_day(
                    current_date,
                    start_sast.time(),
                    time(cls.BUSINESS_END_HOUR, 0, 0)
                )
            elif current_date == end_sast.date():
                # Last day - from start of business day to end time
                total_seconds += cls.get_business_seconds_in_day(
                    current_date,
                    time(cls.BUSINESS_START_HOUR, 0, 0),
                    end_sast.time()
                )
            else:
                # Full business day
                total_seconds += cls.get_business_seconds_in_day(current_date)
            
            current_date += timedelta(days=1)
        
        return total_seconds
    
    @classmethod
    def clear_holiday_cache(cls):
        """Clear the holiday cache. Useful for testing or forcing refresh."""
        cls._holiday_cache.clear()
        logger.info("Holiday cache cleared")

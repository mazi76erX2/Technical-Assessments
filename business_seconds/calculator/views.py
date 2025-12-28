"""
API views for business seconds calculator.
"""

from datetime import datetime
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiResponse
from drf_spectacular.types import OpenApiTypes
import json

from .services import BusinessSecondsCalculator


@extend_schema(
    operation_id='calculate_business_seconds',
    summary='Calculate business seconds between two times',
    description='''
    Calculate the total number of business seconds between two ISO-8601 formatted datetime strings.
    
    A business second is defined as any whole second that elapses:
    - After 08:00 and before 17:00 (9 hours daily)
    - During weekdays (Monday - Friday) 
    - On days that are not public holidays in the Republic of South Africa
    
    All times are converted to South African Standard Time (SAST, UTC+2) for calculation.
    ''',
    parameters=[
        OpenApiParameter(
            name='start_time',
            type=OpenApiTypes.DATETIME,
            location=OpenApiParameter.QUERY,
            required=True,
            description='Start datetime in ISO-8601 format (e.g., 2024-08-26T08:00:00Z)'
        ),
        OpenApiParameter(
            name='end_time', 
            type=OpenApiTypes.DATETIME,
            location=OpenApiParameter.QUERY,
            required=True,
            description='End datetime in ISO-8601 format (e.g., 2024-08-26T17:00:00Z)'
        ),
    ],
    responses={
        200: OpenApiResponse(
            response=OpenApiTypes.STR,
            description='Total number of business seconds as plain text integer'
        ),
        400: OpenApiResponse(
            response=OpenApiTypes.STR, 
            description='Invalid parameters or datetime format'
        ),
        500: OpenApiResponse(
            response=OpenApiTypes.STR,
            description='Internal server error'
        ),
    },
    tags=['Business Seconds Calculator'],
)
@api_view(['GET'])
def calculate_business_seconds(request):
    """
    Calculate business seconds between two ISO-8601 formatted datetime strings.
    
    Query Parameters:
        start_time (str): Start datetime in ISO-8601 format
        end_time (str): End datetime in ISO-8601 format
        
    Returns:
        int: Total number of business seconds between the two times
        str: Error message if the request is invalid
    """
    try:
        # Get query parameters
        start_time_str = request.GET.get('start_time')
        end_time_str = request.GET.get('end_time')
        
        # Validate required parameters
        if not start_time_str or not end_time_str:
            return HttpResponse(
                "Missing required parameters: start_time and end_time", 
                status=400,
                content_type="text/plain"
            )
        
        # Parse ISO-8601 datetime strings
        try:
            # Handle different ISO-8601 formats
            start_datetime = datetime.fromisoformat(start_time_str.replace('Z', '+00:00'))
            end_datetime = datetime.fromisoformat(end_time_str.replace('Z', '+00:00'))
        except ValueError as e:
            return HttpResponse(
                f"Invalid datetime format. Use ISO-8601 format: {str(e)}", 
                status=400,
                content_type="text/plain"
            )
        
        # Calculate business seconds
        try:
            business_seconds = BusinessSecondsCalculator.calculate_business_seconds(
                start_datetime, end_datetime
            )
            
            # Return just the integer value
            return HttpResponse(
                str(business_seconds),
                content_type="text/plain"
            )
            
        except ValueError as e:
            return HttpResponse(
                f"Invalid time range: {str(e)}", 
                status=400,
                content_type="text/plain"
            )
            
    except Exception as e:
        return HttpResponse(
            f"Internal server error: {str(e)}", 
            status=500,
            content_type="text/plain"
        )

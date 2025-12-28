# Business Seconds Calculator API

A Django REST API service for calculating business seconds between two given times, following South African business hours and public holiday rules using the Holiday API.

## Features

- ✅ REST API endpoint for calculating business seconds
- ✅ Support for ISO-8601 formatted datetime parameters
- ✅ Dynamic South African public holidays via Holiday API with fallback
- ✅ Interactive OpenAPI documentation (Swagger UI)
- ✅ PostgreSQL database with Docker Compose
- ✅ Comprehensive input validation and error handling
- ✅ Automated testing with coverage reporting
- ✅ Docker and Docker Compose support
- ✅ Automated deployment script
- ✅ Holiday API integration with intelligent fallback system

## API Documentation

### Interactive Documentation

The API includes comprehensive interactive documentation:

- **Swagger UI**: `http://localhost:8000/api/docs/` - Interactive API testing interface
- **ReDoc**: `http://localhost:8000/api/redoc/` - Beautiful API documentation
- **OpenAPI Schema**: `http://localhost:8000/api/schema/` - Raw OpenAPI specification

### Endpoint

```
GET /api/business-seconds/
```

### Parameters

- `start_time` (required): Start datetime in ISO-8601 format
- `end_time` (required): End datetime in ISO-8601 format

### Response

- **Success**: Single integer value representing total business seconds
- **Error**: Plain text error message

### Examples

```bash
# Basic usage
curl 'http://localhost:8000/api/business-seconds/?start_time=2024-03-19T09:00:00&end_time=2024-03-19T13:00:00'
# Response: 14400

# With timezone
curl 'http://localhost:8000/api/business-seconds/?start_time=2024-03-19T09:00:00+02:00&end_time=2024-03-19T13:00:00+02:00'
# Response: 14400

# UTC timezone
curl 'http://localhost:8000/api/business-seconds/?start_time=2024-03-19T07:00:00Z&end_time=2024-03-19T11:00:00Z'
# Response: 14400

# Multiple days
curl 'http://localhost:8000/api/business-seconds/?start_time=2024-03-19T14:00:00&end_time=2024-03-20T10:00:00'
# Response: 18000
```

## Business Rules

### Business Hours
- **Start**: 08:00 (8:00 AM)
- **End**: 17:00 (5:00 PM)
- **Duration**: 9 hours per business day

### Business Days
- Monday through Friday
- Excludes weekends (Saturday and Sunday)
- Excludes South African public holidays

### South African Public Holidays (Built-in)

The API includes the following South African public holidays for 2024-2026:

- New Year's Day (1 January)
- Human Rights Day (21 March)
- Good Friday (varies)
- Family Day (varies)
- Freedom Day (27 April)
- Workers' Day (1 May)
- Youth Day (16 June)
- National Women's Day (9 August)
- Heritage Day (24 September)
- Day of Reconciliation (16 December)
- Christmas Day (25 December)
- Day of Goodwill (26 December)

## Technology Stack

- **Framework**: Django 5.2.5 + Django REST Framework 3.16.1
- **Package Manager**: UV (Ultra-fast Python package installer)
- **Testing**: pytest + pytest-django
- **Containerization**: Docker + Docker Compose
- **Python**: 3.11+

## Development Setup

### Prerequisites

- Python 3.11+
- UV package manager
- Docker & Docker Compose
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business_seconds
   ```

2. **Install UV (if not already installed)**
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   source $HOME/.local/bin/env
   ```

3. **Set up virtual environment and install dependencies**
   ```bash
   uv venv
   source .venv/bin/activate
   uv pip install -r pyproject.toml
   ```

4. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

5. **Run development server**
   ```bash
   python manage.py runserver
   ```

6. **Run tests**
   ```bash
   pytest
   ```

## Deployment

### Automated Deployment

Use the provided deployment script for automated deployment:

```bash
./deploy.sh
```

This script will:
1. Build the Docker image
2. Run all tests
3. Start the application with Docker Compose
4. Perform a health check
5. Display usage information

### Manual Deployment

```bash
# Build and start services
docker compose build
docker compose up -d

# Run tests
docker compose --profile test run --rm test python -m pytest

# View logs
docker compose logs -f web

# Stop services
docker compose down
```

## Testing

### Running Tests

```bash
# Run all tests
pytest

# Run with coverage
coverage run -m pytest
coverage report
coverage html  # Generate HTML report

# Run specific test files
pytest calculator/test_services.py
pytest calculator/test_views.py

# Run with verbose output
pytest -v
```

### Test Coverage

The test suite includes:
- Unit tests for business logic (`test_services.py`)
- API integration tests (`test_views.py`)
- Edge cases and error conditions
- Different datetime formats
- Holiday and weekend scenarios

## Project Structure

```
business_seconds/
├── business_seconds_api/          # Django project settings
│   ├── __init__.py
│   ├── settings.py               # Django settings
│   ├── urls.py                   # Main URL configuration
│   └── wsgi.py
├── calculator/                   # Main application
│   ├── __init__.py
│   ├── services.py              # Business logic
│   ├── views.py                 # API views
│   ├── urls.py                  # App URL configuration
│   ├── test_services.py         # Service tests
│   └── test_views.py            # API tests
├── docker-compose.yml           # Docker Compose configuration
├── Dockerfile                   # Docker image definition
├── pyproject.toml              # Python dependencies and config
├── pytest.ini                 # Pytest configuration
├── deploy.sh                   # Automated deployment script
└── README.md                   # This file
```

## API Error Handling

The API handles various error conditions and returns appropriate HTTP status codes:

### 400 Bad Request
- Missing required parameters
- Invalid datetime format
- Invalid time range (start_time >= end_time)

### 405 Method Not Allowed
- Non-GET requests to the endpoint

### 500 Internal Server Error
- Unexpected server errors

## Development Workflow

This repository demonstrates a complete development workflow:

1. **Initial Setup**: Project structure with Django, UV, and Docker
2. **Core Implementation**: Business logic without external dependencies
3. **API Layer**: RESTful endpoint with proper error handling
4. **Testing**: Comprehensive test suite with pytest
5. **Containerization**: Docker setup for consistent deployment
6. **Automation**: Deployment script for easy deployment
7. **Documentation**: Complete README with usage examples

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the MIT License.

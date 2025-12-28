#!/bin/bash

# Business Seconds Calculator API Deployment Script
# This script automates the deployment process including dependency installation,
# database setup, testing, and Docker container orchestration.

set -e  # Exit on any error

echo "🚀 Starting deployment of Business Seconds Calculator API..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if UV is installed
if ! command -v uv &> /dev/null; then
    print_warning "UV not found. Installing UV..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    source $HOME/.local/bin/env
fi

print_status "UV package manager available"

# Install dependencies
print_status "Installing dependencies with UV..."
uv sync --all-extras

# Environment setup
if [ ! -f .env ]; then
    print_warning "Creating default .env file..."
    cp .env.example .env 2>/dev/null || echo "DEBUG=True
POSTGRES_DB=business_seconds
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=db
POSTGRES_PORT=5432" > .env
fi

# Stop any existing containers
print_status "Stopping existing containers..."
docker-compose down || true

# Build and start services
print_status "Building and starting Docker containers..."
docker-compose up -d --build

# Wait for database to be ready
print_status "Waiting for database to be ready..."
timeout=60
while ! docker-compose exec -T db pg_isready -U postgres > /dev/null 2>&1; do
    timeout=$((timeout - 1))
    if [ $timeout -eq 0 ]; then
        print_error "Database failed to start within 60 seconds"
        docker-compose logs db
        exit 1
    fi
    sleep 1
done

print_status "Database is ready"

# Run migrations
print_status "Running database migrations..."
docker-compose exec -T web python manage.py migrate

# Run tests with coverage
print_status "Running test suite with coverage..."
docker-compose --profile test run --rm test

# Health check
print_status "Performing health check..."
sleep 5

# Test API endpoint
if curl -f -s "http://localhost:8000/api/business-seconds/?start_time=2024-08-26T08:00:00Z&end_time=2024-08-26T17:00:00Z" > /dev/null; then
    print_status "API health check passed"
else
    print_error "API health check failed"
    docker-compose logs web
    exit 1
fi

# Display service information
echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📊 Services running:"
echo "   • API: http://localhost:8000/api/business-seconds/"
echo "   • Swagger UI: http://localhost:8000/api/docs/"
echo "   • ReDoc: http://localhost:8000/api/redoc/"
echo "   • Admin: http://localhost:8000/admin/"
echo "   • PostgreSQL: localhost:5432"
echo ""
echo "🧪 Test example:"
echo "   curl \"http://localhost:8000/api/business-seconds/?start_time=2024-08-26T08:00:00Z&end_time=2024-08-26T17:00:00Z\""
echo ""
echo "📈 Coverage report available at: htmlcov/index.html"
echo ""
echo "🛠️  To view logs: docker-compose logs -f"
echo "🛑 To stop services: docker-compose down"

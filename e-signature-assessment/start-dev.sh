#!/bin/bash

# E-Signature Development Startup Script

echo "🚀 Starting E-Signature Application..."
echo ""

# Check if we're in the right directory
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    echo "❌ Error: Please run this script from the e-signature-assessment directory"
    exit 1
fi

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "⚠️  Port $1 is already in use"
        return 1
    fi
    return 0
}

# Check ports
echo "🔍 Checking ports..."
check_port 5000 || echo "   Backend port 5000 is in use - you may need to stop existing Flask server"
check_port 4200 || echo "   Frontend port 4200 is in use - you may need to stop existing Angular server"
echo ""

# Start backend
echo "🐍 Starting Flask backend (port 5000)..."
cd backend
if [ ! -f "requirements.txt" ]; then
    echo "❌ requirements.txt not found in backend directory"
    exit 1
fi

# Check if virtual environment exists, if not, suggest creating one
if [ ! -d "venv" ]; then
    echo "💡 Tip: Consider creating a virtual environment:"
    echo "   python -m venv venv"
    echo "   source venv/bin/activate  # On Windows: venv\\Scripts\\activate"
    echo ""
fi

# Install requirements and start backend
echo "   Installing Python dependencies..."
pip install -r requirements.txt > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Python dependencies"
    exit 1
fi

echo "   Starting Flask server..."
python app.py &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start frontend
echo ""
echo "⚛️  Starting Angular frontend (port 4200)..."
cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "   Installing Node.js dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Node.js dependencies"
        kill $BACKEND_PID
        exit 1
    fi
fi

echo "   Starting Angular development server..."
ng serve --open &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Application started successfully!"
echo ""
echo "🌐 Frontend: http://localhost:4200"
echo "🔧 Backend:  http://localhost:5000"
echo "🏥 Health:   http://localhost:5000/health"
echo ""
echo "📝 To stop the application:"
echo "   Press Ctrl+C, then run: kill $BACKEND_PID $FRONTEND_PID"
echo ""
echo "🧪 Test the application by:"
echo "   1. Opening http://localhost:4200 in your browser"
echo "   2. Selecting a PDF file"
echo "   3. Clicking 'Sign & Upload'"
echo ""

# Wait for user interrupt
wait 
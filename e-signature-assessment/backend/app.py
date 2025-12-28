from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)  # allow Angular on localhost to talk to backend

# Configuration
UPLOAD_FOLDER = "signed_docs"
ALLOWED_EXTENSIONS = {"pdf"}

# Create the upload directory if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def allowed_file(filename):
    """Check if the uploaded file has an allowed extension"""
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/upload", methods=["POST"])
def upload_file():
    """
    Handle file upload and simulate document signing
    """
    # Check if file is present in the request
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]

    # Check if a file was actually selected
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    # Validate file type
    if not allowed_file(file.filename):
        return jsonify({"error": "Only PDF files are allowed"}), 400

    # Secure the filename to prevent directory traversal attacks
    original_filename = secure_filename(file.filename)

    # Create signed filename with '-signed' suffix (before extension)
    timestamp = datetime.datetime.now()
    timestamp_str = timestamp.strftime("%Y%m%d_%H%M%S")
    name, ext = os.path.splitext(original_filename)
    signed_filename = f"{name}-signed{ext}"

    # Save the file locally in the signed_docs directory
    file_path = os.path.join(UPLOAD_FOLDER, signed_filename)
    try:
        file.save(file_path)
        file_size = os.path.getsize(file_path)
    except OSError as e:
        return jsonify({"error": f"Failed to save file: {e}"}), 500

    # Simulate "signing" by creating metadata
    metadata = {
        "original_filename": original_filename,
        "signed_filename": signed_filename,
        "signed_at": timestamp.isoformat() + "Z",
        "file_size": file_size,
        "signature_id": f"SIG_{timestamp_str}_{hash(original_filename) % 10000:04d}",
    }

    return jsonify({"message": "File signed successfully", "metadata": metadata}), 200


@app.route("/health", methods=["GET"])
def health_check():
    """Health check endpoint"""
    return (
        jsonify(
            {"status": "healthy", "timestamp": datetime.datetime.now().isoformat()}
        ),
        200,
    )


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

// Interface for the backend response
interface SigningResponse {
  message: string;
  metadata: {
    original_filename: string;
    signed_filename: string;
    signed_at: string;
    file_size: number;
    signature_id: string;
  };
}

// Interface for error response
interface ErrorResponse {
  error: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private http = inject(HttpClient);
  
  // Backend API URL
  private readonly API_URL = 'http://localhost:5000';
  
  // Component state
  selectedFile: File | null = null;
  uploading = false;
  uploadComplete = false;
  errorMessage = '';
  signingResponse: SigningResponse | null = null;

  /**
   * Handle file selection from the input
   */
  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
      
      // Reset previous state
      this.uploadComplete = false;
      this.errorMessage = '';
      this.signingResponse = null;
      
      // Validate file type
      if (!this.selectedFile.name.toLowerCase().endsWith('.pdf')) {
        this.errorMessage = 'Please select a PDF file only.';
        this.selectedFile = null;
        target.value = ''; // Reset file input
      }
    }
  }

  /**
   * Upload and sign the selected file
   */
  uploadAndSign(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a PDF file first.';
      return;
    }

    // Reset state
    this.uploading = true;
    this.errorMessage = '';
    this.uploadComplete = false;
    this.signingResponse = null;

    // Create FormData to send the file
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // Send POST request to backend
    this.http.post<SigningResponse>(`${this.API_URL}/upload`, formData).subscribe({
      next: (response: SigningResponse) => {
        // Success - file uploaded and signed
        this.uploading = false;
        this.uploadComplete = true;
        this.signingResponse = response;
        console.log('File signed successfully:', response);
      },
      error: (error) => {
        // Error occurred
        this.uploading = false;
        this.uploadComplete = false;
        
        // Extract error message from response
        if (error.error && error.error.error) {
          this.errorMessage = error.error.error;
        } else if (error.message) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again.';
        }
        
        console.error('Upload error:', error);
      }
    });
  }

  /**
   * Reset the form to initial state
   */
  resetForm(): void {
    this.selectedFile = null;
    this.uploading = false;
    this.uploadComplete = false;
    this.errorMessage = '';
    this.signingResponse = null;
    
    // Reset file input
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  /**
   * Format file size for display
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Format date for display
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
}
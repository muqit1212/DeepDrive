# DeepDrive - Car Image Prediction System

A full-stack application that uses deep learning to predict car information from images using CLIP embeddings and ChromaDB for similarity search.

## Project Structure

```
deepDrive/
├── backend/                 # FastAPI backend
│   ├── api.py              # Main API endpoints
│   ├── prediction.py       # Prediction logic
│   ├── loadData.py         # Data loading utilities
│   ├── utils.py            # Helper functions
│   └── requirements.txt    # Python dependencies
├── Frontend/               # Next.js frontend
│   ├── src/               # Source code
│   └── package.json       # Node dependencies
└── clip_chroma/           # ChromaDB database storage
```

## Prerequisites

- **Python**: 3.9 or higher
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher

## Backend Setup

### 1. Navigate to the backend directory
```bash
cd backend
```

### 2. Create a Python virtual environment (recommended)
```bash
python -m venv venv
```

### 3. Activate the virtual environment

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### 4. Install Python dependencies
```bash
pip install -r requirements.txt
```

### 4.1. (Optional) Speed up Hugging Face downloads
If you see warnings about unauthenticated requests to the Hugging Face Hub, set a token before running the backend. This improves download speed and avoids rate limiting for large model files.

**Windows PowerShell:**
```powershell
$env:HF_TOKEN="your_hf_token"
# or
$env:HUGGINGFACEHUB_API_TOKEN="your_hf_token"
```

**Windows Command Prompt:**
```cmd
set HF_TOKEN=your_hf_token
set HUGGINGFACEHUB_API_TOKEN=your_hf_token
```

You can get a token from https://huggingface.co/settings/tokens

### 5. Database Setup

The ChromaDB database is already configured and will be created automatically in the `clip_chroma` directory when you first run the prediction or data loading scripts.

**To load initial data (if you have a dataset):**
```python
from loadData import LoadData

# Replace with your dataset directory path
loader = LoadData("path/to/your/dataset")
loader.generate_embeddings()
loader.add_embeddings_to_chroma()
```

### 6. Run the Backend Server
```bash
uvicorn api:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at: `http://localhost:8000`

API Documentation (Swagger): `http://localhost:8000/docs`

## Frontend Setup

### 1. Navigate to the Frontend directory
```bash
cd Frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create or update `.env.local` file in the Frontend directory with your Clerk credentials:

```env
# Clerk Authentication Keys
# Get these from https://dashboard.clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**To get Clerk credentials:**
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or select existing one
3. Copy the publishable key and secret key from the API Keys section

### 4. Run the Frontend Development Server
```bash
npm run dev
```

The application will be available at: `http://localhost:3000`

## Running the Complete Application

### Option 1: Using Two Terminal Windows

**Terminal 1 (Backend):**
```bash
cd backend
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On Mac/Linux
uvicorn api:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 (Frontend):**
```bash
cd Frontend
npm run dev
```

### Option 2: Using PowerShell with Background Jobs

```bash
# Start backend in background
cd backend
Start-Job -ScriptBlock { uvicorn api:app --reload --host 0.0.0.0 --port 8000 }

# Start frontend
cd Frontend
npm run dev
```

## API Endpoints

### POST /predict
Upload an image to get car predictions.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: image file

**Example using curl:**
```bash
curl -X POST "http://localhost:8000/predict" -F "image=@path/to/your/image.jpg"
```

**Response:**
```json
{
  "result": {
    "ids": ["0"],
    "distances": [0.123],
    "metadatas": [{"image.jpg": "car_model"}],
    "embeddings": null
  }
}
```

## Tech Stack

### Backend
- **FastAPI**: Modern web framework for building APIs
- **ChromaDB**: Vector database for similarity search
- **TensorFlow**: Deep learning framework
- **MobileNetV2**: Pre-trained model for feature extraction
- **OpenCLIP**: For generating image embeddings

### Frontend
- **Next.js 14**: React framework with App Router
- **Clerk**: Authentication and user management
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **Radix UI**: Headless UI components

### Database
- **ChromaDB**: Vector database (SQLite-based, file storage)

## Troubleshooting

### Backend Issues

**Issue: Module not found errors**
```bash
# Ensure virtual environment is activated
# Reinstall dependencies
pip install -r requirements.txt
```

**Issue: TensorFlow GPU not working**
```bash
# For CPU-only version
pip install tensorflow-cpu==2.16.1
```

**Issue: Hugging Face download slow or unauthenticated**
- Set `HF_TOKEN` or `HUGGINGFACEHUB_API_TOKEN` before starting the backend
- Use a Hugging Face token from https://huggingface.co/settings/tokens
- Restart the terminal after adding the environment variable if necessary

**Issue: ChromaDB errors**
- Delete the `clip_chroma` folder and restart the server to recreate the database

### Frontend Issues

**Issue: Clerk authentication errors**
- Verify your Clerk credentials in `.env.local`
- Ensure you've created an application in Clerk Dashboard

**Issue: Cannot connect to backend**
- Verify backend is running on port 8000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`

**Issue: npm install fails**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Development Workflow

1. Make sure backend is running first
2. Start the frontend development server
3. Navigate to `http://localhost:3000`
4. Sign up or sign in using Clerk authentication
5. Access the dashboard to use car prediction features

## Production Build

### Backend
```bash
# Use a production ASGI server like Gunicorn
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker api:app
```

### Frontend
```bash
cd Frontend
npm run build
npm start
```

## License

This project is for educational purposes.

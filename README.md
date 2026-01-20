# Job Portal Utils Service

A Node.js backend service for job portal utilities, providing file upload capabilities and AI-powered resume analysis and career guidance features.

## Features

- **File Upload**: Upload and manage files (e.g., resumes) using Cloudinary for storage
- **Resume Analysis**: AI-powered analysis of uploaded resumes using OpenAI
- **Career Guidance**: Personalized career advice based on user input
- **RESTful API**: Well-structured API endpoints for easy integration
- **CORS Support**: Configured for frontend integration (localhost:3000)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd job-portal-utils-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=3001
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

Start the development server:
```bash
npm start
```

The service will run on the port specified in your `.env` file (default: 3001).

## Project Structure

```
job-portal-utils-service/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── index.js                    # Main application entry point
    ├── config/
    │   └── cloudinaryConfig.js     # Cloudinary configuration
    ├── controller/
    │   ├── AiController.js         # AI-related controllers (resume analysis, career guidance)
    │   └── uploadController.js     # File upload controllers
    ├── middleware/
    │   └── multer.js               # Multer middleware for file uploads
    ├── routes/
    │   ├── index.js                # Main routes setup
    │   └── v1/
    │       ├── aiGuide.js          # AI routes (resume analysis, career guidance)
    │       ├── index.js            # V1 API routes setup
    │       └── upload.js           # Upload routes
    ├── Service/
    │   ├── carrerGuidance.js       # Career guidance service
    │   ├── getResumeAnalysis.js    # Resume analysis service
    │   └── upload.js               # File upload service
    └── utils/
        ├── carrerGuidancePrompt.js # Prompts for career guidance
        └── resumeAnalysisPrompt.js # Prompts for resume analysis
```

## API Endpoints

### Base URL: `http://localhost:{PORT}`

- **GET /home**
  - Health check endpoint
  - Response: "Utils Service is up and running"

### Upload Endpoints (`/api/v1/uploads`)

- **POST /**
  - Upload a file
  - Request Body: File data
  - Response: Upload success with file details

- **DELETE /delete**
  - Delete a file from Cloudinary
  - Request Body: `{ "publicId": "file_public_id" }`
  - Response: Deletion success confirmation

### AI Endpoints (`/api/v1/ai`)

- **POST /resume-analysis**
  - Analyze a resume
  - Request Body: Resume data
  - Response: AI-generated resume analysis

- **POST /career-guidance**
  - Get career guidance
  - Request Body: User career data
  - Response: AI-generated career advice

## Scripts

- `npm start`: Start the server with nodemon for development

## Dependencies

- **express**: Web framework for Node.js
- **cloudinary**: Cloud-based image and video management
- **openai**: OpenAI API client for AI features
- **multer**: Middleware for handling file uploads
- **pdf-parse**: PDF parsing library
- **cors**: Cross-Origin Resource Sharing
- **dotenv**: Environment variable management
- **body-parser**: Request body parsing
- **nodemon**: Development tool for auto-restarting the server

## Environment Variables

- `PORT`: Server port (default: 3001)
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Cloudinary API key
- `CLOUDINARY_API_SECRET`: Cloudinary API secret
- `OPENAI_API_KEY`: OpenAI API key

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC

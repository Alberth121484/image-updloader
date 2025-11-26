# Image Upload - Backend

A Node.js/Express backend API for the Image Upload application.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique filename generation

## Project Structure

```
backend/
├── src/
│   └── index.js         # Server entry point
├── uploads/             # Uploaded images storage
├── .env                 # Environment variables
├── .env.example         # Environment template
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/upload` | Upload an image (Task 2.1) |
| GET | `/api/download/:filename` | Download an image (Task 2.2) |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Server port |
| `NODE_ENV` | `development` | Environment |

## Scripts

```bash
# Install dependencies
npm install

# Start development server (with watch mode)
npm run dev

# Start production server
npm start
```

## File Validation

- **Allowed types:** JPG, PNG, GIF
- **Max file size:** 2MB

## Deployment (Vercel)

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `FRONTEND_URL` - Your frontend URL for CORS

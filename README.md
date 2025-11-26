# Image Upload Application

A full-stack image upload application built with React and Node.js/Express.

![Light Mode](https://github.com/user-attachments/assets/17ac1db6-c363-4478-a69f-2cbd8bb5d689)
![Dark Mode](https://github.com/user-attachments/assets/87207d9c-d2fd-400f-9b39-5696de21479c)
![Upload Immage](https://github.com/user-attachments/assets/0a641272-8603-4327-ab37-824de7f757e8)



## Features

- **Drag & Drop Upload** - Drag and drop images or click to browse
- **File Validation** - Supports JPG, PNG, GIF (max 2MB)
- **Upload Progress** - Real-time progress tracking
- **Image Preview** - View uploaded images
- **Share** - Copy image URL to clipboard
- **Download** - Download uploaded images
- **Dark/Light Mode** - Toggle between themes
- **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- react-dropzone

### Backend
- Node.js
- Express.js
- Multer

## Project Structure

```
image-uploader/
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── context/    # Theme context
│   │   ├── hooks/      # Custom hooks
│   │   └── services/   # API services
│   └── public/         # Static assets
├── backend/            # Express backend
│   ├── src/
│   │   ├── routes/     # API routes
│   │   └── middleware/ # Multer config
│   └── uploads/        # Uploaded files
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/image-uploader.git
cd image-uploader
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Development

1. Start the backend server
```bash
cd backend
npm run dev
# Server runs on http://localhost:3001
```

2. Start the frontend dev server
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

## Deployment

### Backend (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to backend: `cd backend`
3. Deploy: `vercel`
4. Set environment variables in Vercel dashboard

### Frontend (Netlify)

1. Build: `npm run build`
2. Deploy `dist` folder to Netlify
3. Set `VITE_API_URL` environment variable to your backend URL

## Environment Variables

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

### Frontend
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `/api` (uses proxy) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/upload` | Upload image |
| `GET` | `/api/download/:filename` | Download image |
| `GET` | `/uploads/:filename` | Static image URL |

## License

MIT

# Image Upload - Frontend

A React-based frontend for the Image Upload application.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **react-dropzone** - Drag and drop file upload

## Project Structure

```
frontend/
├── public/
│   ├── assets/          # Icons and images
│   │   ├── Link.svg
│   │   ├── Moon_fill.svg
│   │   ├── Sun_fill.svg
│   │   ├── download.svg
│   │   ├── logo.svg
│   │   ├── logo-small.svg
│   │   └── upload.svg
│   └── favicon.ico
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#3662E3` | Buttons, links |
| Primary Light | `#C2DAF9` | Backgrounds |
| Dark BG | `#121826` | Dark mode background |
| Dark Card | `#212936` | Dark mode cards |
| Light BG | `#F9FAFB` | Light mode background |
| Light Card | `#FFFFFF` | Light mode cards |
| Border Light | `#E5E7EB` | Light mode borders |
| Border Dark | `#4D5562` | Dark mode borders |

## Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server runs on `http://localhost:5173` with a proxy configured for API calls to `http://localhost:3001`.

## Deployment (Netlify)

1. Build the project
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository, or
   - Drag and drop the `dist` folder to Netlify

3. Set environment variables:
   - `VITE_API_URL` - Your backend API URL (e.g., `https://your-backend.vercel.app/api`)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL (uses `/api` proxy in development) |

# Distributed Job Processing and Workflow Platform

A full-stack application built with React, TypeScript, Redux Toolkit, Tailwind CSS, Node.js, and Express.js.

## Tech Stack

### Frontend
- **React** with **TypeScript**
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Vite** as the build tool

### Backend
- **Node.js** with **Express.js**
- **TypeScript**
- **CORS** enabled for API access

## Project Structure

```
.
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── store/    # Redux store configuration
│   │   └── ...
│   └── ...
├── backend/          # Express.js backend
│   ├── src/
│   │   └── index.ts  # Main server file
│   └── ...
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

## Development Notes

- The frontend is configured to proxy API requests to `http://localhost:5000`
- Redux Toolkit is set up with typed hooks (`useAppDispatch`, `useAppSelector`)
- Tailwind CSS is configured and ready to use
- The backend uses TypeScript with strict type checking


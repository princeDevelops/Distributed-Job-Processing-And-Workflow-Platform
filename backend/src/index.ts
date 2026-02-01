import dotenv from 'dotenv'
dotenv.config()

import app from './api/app'
import { connectDB } from './api/config/db'

const PORT = process.env.PORT || 5000

async function bootstrap() {
  try {
    // Connect to database first
    await connectDB()

    // Start HTTP server only after DB is ready
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

bootstrap()

import { errorHandler } from './middleware/error-middleware';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import jobRoutes from './routes/job-routes';

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/jobs', jobRoutes);

app.use(errorHandler);
export default app;

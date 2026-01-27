import mongoose, { Schema, Document } from 'mongoose';
import { JobStatus } from '@backend/shared';

export interface JobDocument extends Document {
  type: string;
  status: JobStatus;
  attempts: number;
  maxAttempts: number;
  progress: number;
  errorMessage?: string;
  createdAt: Date;
  startedAt?: Date;
  finishedAt?: Date;
}

const JobSchema = new Schema<JobDocument>(
  {
    type: { type: String, required: true },
    status: { type: String, enum: Object.values(JobStatus), required: true },
    attempts: { type: Number, required: true },
    maxAttempts: { type: Number, required: true },
    progress: { type: Number, required: true },
    errorMessage: { type: String },
    startedAt: { type: Date },
    finishedAt: { type: Date },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const JobModel = mongoose.model<JobDocument>('Job', JobSchema);

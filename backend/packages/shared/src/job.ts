import { JobStatus } from './enum';

export interface Job {
  id: string;
  type: string;
  status: JobStatus;

  attempts: number;
  maxAttempts: number;
  progress: number;
  createdAt: Date;
  startedAt?: Date;
  finishedAt?: Date;
  errorMessage?: string;
}

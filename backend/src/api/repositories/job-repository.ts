import { JobStatus } from '@backend/shared';
import { JobModel, JobDocument } from '../model/job-model';

export async function createJob(data: {
  type: string;
  maxAttempts: number;
}): Promise<JobDocument> {
  return JobModel.create({
    type: data.type,
    status: JobStatus.QUEUED,
    attempts: 0,
    maxAttempts: data.maxAttempts,
    progress: 0,
  });
}

export async function updateJobStatus(
  jobId: string,
  status: JobStatus,
  errorMessage?: string
): Promise<JobDocument | null> {
  return JobModel.findByIdAndUpdate(
    jobId,
    { status, errorMessage },
    { new: true }
  );
}

export async function getJobById(jobId: string): Promise<JobDocument | null> {
  return JobModel.findById(jobId);
}

export async function updateJobProgress(
  jobId: string,
  progress: number
): Promise<JobDocument | null> {
  if (progress < 0 || progress > 100) {
    throw new Error('Invalid progress');
  }

  return JobModel.findByIdAndUpdate(jobId, { progress }, { new: true });
}

export async function listJobs(): Promise<JobDocument[]> {
  return JobModel.find().sort({ createdAt: -1 });
}

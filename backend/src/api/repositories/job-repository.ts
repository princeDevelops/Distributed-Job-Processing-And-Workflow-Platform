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

export async function updateJobProgress(jobId: string, progress: number) {
  return JobModel.findByIdAndUpdate(jobId, { progress }, { new: true });
}

export async function listJobs(): Promise<JobDocument[]> {
  return JobModel.find().sort({ createdAt: -1 });
}

export async function markJobAttemptStart(jobId: string, attempt: number) {
  return JobModel.findByIdAndUpdate(
    jobId,
    {
      status: JobStatus.RUNNING,
      attempts: attempt,
      progress: 0,
      errorMessage: null,
      startedAt: new Date(),
    },
    { new: true }
  );
}

export async function markJobFailure(jobId: string, errorMessage: string) {
  return JobModel.findByIdAndUpdate(
    jobId,
    {
      status: JobStatus.FAILED,
      errorMessage: errorMessage,
      finishedAt: new Date(),
    },
    {
      new: true,
    }
  );
}

export async function markJobCompleted(jobId: string) {
  return JobModel.findByIdAndUpdate(
    jobId,
    {
      status: JobStatus.COMPLETED,
      progress: 100,
      finishedAt: new Date(),
    },
    {
      new: true,
    }
  );
}

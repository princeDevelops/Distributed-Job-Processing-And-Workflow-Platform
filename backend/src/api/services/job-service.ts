import { CreateJobInput, JobStatus, RetryConfig } from '@backend/shared';
import * as JobRepo from '../repositories/job-repository';
import { jobQueue } from '../queue/job-queue';

const DEFAULT_RETRY: RetryConfig = {
  maxAttempts: 3,
  backOffMs: 1000,
};

export async function createJob(input: CreateJobInput) {
  const job = await JobRepo.createJob({
    type: input.type,
    maxAttempts: DEFAULT_RETRY.maxAttempts,
  });

  await jobQueue.add(
    'execute-job',
    {
      jobId: job._id,
    },
    {
      attempts: DEFAULT_RETRY.maxAttempts,
      backoff: {
        type: 'exponential',
        delay: DEFAULT_RETRY.backOffMs,
      },
    }
  );

  return job;
}

export async function cancelJob(jobId: string) {
  return JobRepo.updateJobStatus(jobId, JobStatus.CANCELLED);
}

export async function getJob(jobId: string) {
  return JobRepo.getJobById(jobId);
}

export async function listJobs() {
  return JobRepo.listJobs();
}

import { CreateJobInput, JobStatus, RetryConfig } from '@backend/shared';
import * as JobRepo from '../repositories/job-repository';

const DEFAULT_RETRY: RetryConfig = {
  maxAttempts: 3,
  backOffMs: 1000,
};

export async function createJob(input: CreateJobInput) {
  return JobRepo.createJob({
    type: input.type,
    maxAttempts: DEFAULT_RETRY.maxAttempts,
  });
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

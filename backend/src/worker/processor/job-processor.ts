import { Worker } from 'bullmq';
import { redis } from '../config/redis';
import { executeJob } from '../services/job-executor';
import * as JobRepo from '../../api/repositories/job-repository';
import { JobStatus } from '@backend/shared';

new Worker(
  'jobs',
  async (job) => {
    const { jobId } = job.data;

    console.log('👷 Processing job:', jobId);

    await JobRepo.updateJobStatus(jobId, JobStatus.RUNNING);

    try {
      await executeJob(jobId);
      await JobRepo.updateJobStatus(jobId, JobStatus.COMPLETED);
    } catch (err: any) {
      await JobRepo.updateJobStatus(jobId, JobStatus.FAILED, err.message);
      throw err; 
    }
  },
  { connection: redis }
);

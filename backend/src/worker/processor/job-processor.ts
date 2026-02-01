import { Worker } from 'bullmq';
import { redis } from '../config/redis';
import { executeJob } from '../services/job-executor';
import * as JobRepo from '../../api/repositories/job-repository';
import { JobStatus } from '@backend/shared';

new Worker(
  'jobs',
  async (job) => {
    const { jobId } = job.data;

    const currentAttempt = job.attemptsMade + 1;
    const maxAttempts = job.opts.attempts ?? 1;

    console.log(
      `👷 Job ${jobId} started (attempt ${currentAttempt}/${maxAttempts})`
    );

    await JobRepo.markJobAttemptStart(jobId, currentAttempt);

    try {
      await executeJob(jobId);
      await JobRepo.markJobCompleted(jobId);
      console.log(`✅ Job ${jobId} completed`);
    } catch (err: any) {
      const isFinalAttempt = currentAttempt >= maxAttempts;

      console.error(`❌ Job ${jobId} failed (attempt ${currentAttempt})`, {
        willRetry: !isFinalAttempt,
      });

      if (isFinalAttempt) {
        await JobRepo.markJobFailure(jobId, err.message);
      }

      throw err;
    }
  },
  { connection: redis }
);

import { updateJobProgress } from "../../api/services/job-service";


export const executeJob = async (jobId: string) => {
  console.log(`Executing Job... ${jobId}`);

  await sleep(500);
  await updateJobProgress(jobId, 20);

  await sleep(500);
  await updateJobProgress(jobId, 50);

  await sleep(500);
  await updateJobProgress(jobId, 80);
  if (Math.random() < 0.3) {
    await updateJobProgress(jobId, 0);
    throw new Error('Simulated Job Failure');
  }

  await updateJobProgress(jobId, 100);
  console.log(`Job Completed: ${jobId}`);
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

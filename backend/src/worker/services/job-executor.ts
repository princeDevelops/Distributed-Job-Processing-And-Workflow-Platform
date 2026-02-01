export const executeJob = async (jobId: string) => {
  console.log(`Executing Job... ${jobId}`);

  await sleep(1000);
  await sleep(1000);

  if (Math.random() < 0.3) {
    throw new Error('Simulated Job Failure');
  }
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

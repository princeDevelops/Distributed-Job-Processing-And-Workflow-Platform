import { JobStepStatus } from './enum';

interface JobStep {
  id: string;
  jobId: string;
  name: string;

  //execution order
  order: number;
  startedAt?: Date;
  finishedAt?: Date;
  errorMessage?: string;
}

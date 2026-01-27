import { RetryConfig } from './retry';

export interface CreateJobInput {
  id: string;
  retry: RetryConfig;
  payload?: Record<string, unknown>;
}

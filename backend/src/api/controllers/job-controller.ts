import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../errors/httpErrors';
import {
  createJob,
  listJobs,
  getJob,
  cancelJob,
} from '../services/job-service';
import { asyncHandler } from '../utils/asyncHandler';

export const createJobHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const job = await createJob(req.body);
    res.status(201).json(job);
  }
);

export const listJobsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const jobs = await listJobs();
    res.status(200).json(jobs);
  }
);

export const getJobHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const job = await getJob(Array.isArray(id) ? id[0] : id);

    if (!job) {
      throw new NotFoundError('Job not found');
    }

    res.status(200).json(job);
  }
);

export const cancelJobHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const job = await cancelJob(Array.isArray(id) ? id[0] : id);
    res.status(200).json(job);
  }
);

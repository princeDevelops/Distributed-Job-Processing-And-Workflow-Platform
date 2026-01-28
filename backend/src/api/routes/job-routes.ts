import { Router } from 'express';

import {
  createJobHandler,
  cancelJobHandler,
  getJobHandler,
  listJobsHandler,
} from '../controllers/job-controller';

const router = Router();

router.post('/create', createJobHandler);
router.get('/', listJobsHandler);
router.get('/:id', getJobHandler);
router.post('/:id/cancel', cancelJobHandler);
export default router;

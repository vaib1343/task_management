import { createRouter } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { createTask, getAllTask } from 'controller/task';
import { isAuthenticatedUser } from 'utils/auth';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(isAuthenticatedUser).post(createTask).get(getAllTask);

export default router.handler();

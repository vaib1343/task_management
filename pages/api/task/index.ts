import { createRouter } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { createTask, getAllTask } from 'controller/task';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(createTask).get(getAllTask);

export default router.handler();

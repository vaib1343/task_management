import { deleteTask, getTask, updateTask } from 'controller/task';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getTask).put(updateTask).delete(deleteTask);

export default router.handler({});

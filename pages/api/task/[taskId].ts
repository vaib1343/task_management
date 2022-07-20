import { deleteTask, getTask, updateTask } from 'controller/task';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { isAuthenticatedUser } from 'utils/auth';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(isAuthenticatedUser).get(getTask).put(updateTask).delete(deleteTask);

export default router.handler({});

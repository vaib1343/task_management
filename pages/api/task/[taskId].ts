import { deleteTask, getTask, updateTask } from 'controller/task';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { isAuthenticatedUser } from 'utils/auth';

interface NextRequestUser extends NextApiRequest {
    user: {
        id: string;
    };
}

const router = createRouter<NextRequestUser, NextApiResponse>();

router.use(isAuthenticatedUser).get(getTask).put(updateTask).delete(deleteTask);

export default router.handler({});

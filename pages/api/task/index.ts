import { createRouter } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { createTask, getAllTask } from 'controller/task';
import { isAuthenticatedUser } from 'utils/auth';

interface NextRequestUser extends NextApiRequest {
    user: {
        id: string
    }
}

const router = createRouter<NextRequestUser, NextApiResponse>();

router.use(isAuthenticatedUser).post(createTask).get(getAllTask);

export default router.handler();

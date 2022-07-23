import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import ErrorHandler from 'utils/errorHandler';

interface NextRequestUser extends NextApiRequest {
    user: any;
}
export const isAuthenticatedUser = async (req: NextRequestUser, res: NextApiResponse, next: any) => {
    const session = await getSession({ req });
    if (!session) {
        return next(new ErrorHandler('Login first to access this resource'));
    }
    req.user = session?.user;
    next();
};

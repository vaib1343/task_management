import { NextApiRequest, NextApiResponse } from 'next';
import ErrorHandler from './errorHandler';

export const success = (res: NextApiResponse, data: any, message: string, status: number = 200) => {
    res.status(status).json({
        message,
        success: true,
        data,
    });
};

export const error = (res: NextApiResponse, error: Object | string, status: number = 500) => {
    res.status(status).json({
        success: false,
        error: error,
    });
};

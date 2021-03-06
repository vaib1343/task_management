import prisma from 'lib/prisma';
import next, { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import ErrorHandler from 'utils/errorHandler';
import { success, error } from 'utils/responseHandler';
import { undefineHandle } from 'utils/utils';

interface NextRequestUser extends NextApiRequest{
    user: {
        id: string
    }
}

export const getAllTask = async (req: NextRequestUser, res: NextApiResponse) => {
    try {
        const status = req.query.status;
        let tasks;
        tasks = await prisma.task.findMany();
        if (status === 'TODO' || status === 'INPROGRESS' || status === 'DONE') {
            tasks = await prisma.task.findMany({
                where: {
                    status: status,
                    userId: req.user.id,
                },
            });
        }
        success(res, tasks, 'All task fetched');
    } catch (err) {
        error(res, (err as Error).message, 500);
    }
};

export const getTask = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const taskId = req?.query?.taskId;
        const task = await prisma.task.findUnique({
            where: {
                id: '' + taskId,
            },
        });
        success(res, task, 'Task fetched');
    } catch (err) {
        error(res, (err as Error).message, 500);
    }
};

export const createTask = async (req: NextRequestUser, res: NextApiResponse, next: (error: ErrorHandler) => void) => {
    try {
        const taskData = req.body;
        if (undefineHandle(taskData)) {
            throw new ErrorHandler('Please fill requred fields');
        }

        const task = await prisma.task.create({
            data: {
                ...taskData,
                status: 'TODO',
                userId: req.user.id,
            },
        });

        success(res, task, 'Task Created Successfully');
    } catch (err) {
        error(res, (err as Error).message);
    }
};

export const updateTask = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const taskId = req.query.taskId;
        const taskData = req.body;
        if (undefineHandle(taskData)) {
            throw new ErrorHandler('Please fill required fields');
        }

        let task = await prisma.task.findUnique({
            where: {
                id: '' + taskId,
            },
        });
        if (!task) {
            throw new ErrorHandler('Task not found', 404);
        }
        task = await prisma.task.update({
            where: {
                id: '' + taskId,
            },
            data: taskData,
        });
        success(res, task, 'Task updated');
    } catch (err) {
        error(res, (err as Error).message);
    }
};

export const deleteTask = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const taskId = req.query.taskId;
        let task = await prisma.task.findUnique({
            where: {
                id: '' + taskId,
            },
        });
        if (!task) {
            throw new ErrorHandler('Task not found', 404);
        }
        task = await prisma.task.delete({
            where: {
                id: '' + taskId,
            },
        });
        success(res, task, 'Task Deleted');
    } catch (err) {
        error(res, (err as Error).message);
    }
};

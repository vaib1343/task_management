import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { task } from 'types/task';

export const fetchAllTask = createAsyncThunk<{ data: task[]; status: string }, string>('task/getAll', async (status: string) => {
    let baseURL = '/api/task?';
    if (status) {
        baseURL = baseURL + `status=${status}`;
    }
    const response = await axios.get(baseURL);
    const data: task[] = response.data.data;
    return { data, status };
});

export const fetchTask = createAsyncThunk<task, string>('task/get', async (id) => {
    let baseURL = '/api/task';
    const response = await axios.get(baseURL + '/' + id);
    const data: task = response.data.data;
    return data;
});

export const createTask = createAsyncThunk<task, {}>('task/create', async (data, thunkAPI) => {
    let baseURL = '/api/task';
    const response = await axios.post(baseURL, data);
    const responseData: task = response.data.data;
    return responseData;
});

export const updatetask = createAsyncThunk<task, { payload: Object; id: string | undefined }>('task/update', async ({ payload, id }) => {
    let baseURL = '/api/task';
    const response = await axios.put(baseURL + '/' + id, payload);
    const data: task = response.data.data;
    return data;
});

export const deleteTask = createAsyncThunk<task, string>('task/get', async (id) => {
    let baseURL = '/api/task';
    const response = await axios.delete(baseURL + '/' + id);
    const data: task = response.data.data;
    return data;
});

type taskState = {
    taskDetail: task;
    todoList: task[];
    doneList: task[];
    inProgressList: task[];
    status: string;
    error: string;
    taskDelete: boolean;
};

const initialState = {
    taskDetail: {},
    todoList: [] as task[],
    doneList: [] as task[],
    inProgressList: [] as task[],
    status: '',
    error: '',
    taskDelete: false,
} as taskState;

const task = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllTask.pending, (state, { payload }) => {
            state.status = 'pending';
            state.error = '';
        });

        builder.addCase(fetchAllTask.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.error = '';
            switch (payload.status) {
                case 'TODO':
                    state.todoList = payload.data;
                    break;
                case 'INPROGRESS':
                    state.inProgressList = payload.data;
                    break;
                case 'DONE':
                    state.doneList = payload.data;
            }
        });

        builder.addCase(fetchAllTask.rejected, (state, { payload }) => {
            state.status = 'failed';
            if (payload) state.error = payload as string;
        });
        builder.addCase(deleteTask.pending, (state, { payload }) => {
            state.status = 'pending';
            state.taskDelete = false;
            state.error = '';
        });

        builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.error = '';
            state.taskDelete = true;
        });

        builder.addCase(deleteTask.rejected, (state, { payload }) => {
            state.status = 'failed';
            if (payload) state.error = payload as string;
        });
    },
});

export default task.reducer;

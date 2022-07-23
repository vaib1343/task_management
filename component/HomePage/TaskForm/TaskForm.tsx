import React, { useEffect, useState } from 'react';
import styles from './TaskForm.module.scss';
import Button from 'component/common/Button/Button';
import Input from 'component/common/Input/Input';
import Modal from 'component/common/Modal/Modal';
import Select from 'component/common/Select/Select';
import TextArea from 'component/common/TextArea/TextArea';
import { PriorityOptions, requiredField, StatusOptions } from 'utils/utils';
import DatePicker from 'component/common/DatePicker/DatePicker';
import { useAppDispatch } from 'appState/hooks';
import { createTask, fetchTask, updatetask } from 'appState/slice/task.slice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

interface TaskFormProps {
    action?: string;
    onRequestClose: () => void;
    id?: string;
}

interface Task {
    name: string;
    description: string;
    label: string;
    priority: string;
    dateCompletion: Date | null;
    status?: string;
}

const TaskForm: React.FC<TaskFormProps> = (props) => {
    const [taskData, setTaskData] = useState<Task>({
        name: '',
        description: '',
        label: '',
        priority: '',
        dateCompletion: new Date(),
        status: 'TODO',
    });
    const [error, setError] = useState({
        name: '',
        description: '',
        label: '',
        priority: '',
        dateCompletion: '',
        status: '',
    });
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTaskData((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleDate = (value: Date | null) => {
        setTaskData((preState) => ({
            ...preState,
            dateCompletion: value,
        }));
    };

    const checkRequiredField = (fields: Task): boolean => {
        let flag = false;
        const errorPost = { ...error };
        requiredField.map((el) => {
            if (Object.keys(fields).includes(el) && !fields[el as keyof typeof fields]) {
                errorPost[el as keyof typeof error] = `${el} is a require field`;
                flag = true;
            } else {
                errorPost[el as keyof typeof error] = '';
            }
        });
        setError(errorPost);
        return flag;
    };

    useEffect(() => {
        if (props.id) {
            dispatch(fetchTask('' + props.id))
                .unwrap()
                .then((res) => {
                    setTaskData((preState) => ({
                        ...preState,
                        name: res.name,
                        description: res.description,
                        label: res.label,
                        priority: res.priority,
                        dateCompletion: new Date(res.dateCompletion),
                        status: res.status,
                    }));
                });
        }
    }, [props.id]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (checkRequiredField(taskData)) {
            return;
        }
        const postData = {
            ...taskData,
            dateCompletion: taskData.dateCompletion?.toISOString(),
        };
        if (props.action == 'create') {
            dispatch(createTask(postData))
                .unwrap()
                .then((res) => {
                    router.push({
                        query: {
                            model: 'close',
                        },
                    });
                    props.onRequestClose();
                    if (Object.keys(res).length) {
                        toast.success('Task created successfully');
                    }
                });
        } else {
            dispatch(updatetask({ payload: postData, id: props.id }))
                .unwrap()
                .then((res) => {
                    router.push({
                        query: {
                            model: 'close',
                        },
                    });
                    props.onRequestClose();
                    if (Object.keys(res).length) {
                        toast.success('Task updated successfully');
                    }
                });
        }
    };
    const { action } = props;
    return (
        <div className='mt-4'>
            <Input error={error.name} label='Name' type='text' name='name' placeholder='Enter task name' onChange={(e) => handleChange(e)} value={taskData.name} />
            <TextArea error={error.description} label='Description' name='description' placeholder='Enter description' onChange={(e) => handleChange(e)} value={taskData.description} />
            <Input error={error.label} label='Label' type='text' name='label' placeholder='Enter label' onChange={(e) => handleChange(e)} value={taskData.label} />
            <Select error={error.priority} label='Priority' name='priority' options={PriorityOptions} onChange={(e) => handleChange(e)} value={taskData.priority} />
            <DatePicker minDate={new Date()} selected={taskData.dateCompletion} onChange={(e) => handleDate(e)} label='Date of Completion' />
            {action == 'update' && <Select label='Status' name='status' options={StatusOptions} onChange={(e) => handleChange(e)} value={taskData.status}></Select>}
            <div className='mt-4'>
                <Button variant='filled' type='submit' label='Submit' style={{ marginRight: '1rem' }} onClick={(e) => handleSubmit(e)} />
                <Button
                    variant='outline'
                    label='Close'
                    onClick={() => {
                        props.onRequestClose();
                    }}
                />
            </div>
        </div>
    );
};

export default TaskForm;

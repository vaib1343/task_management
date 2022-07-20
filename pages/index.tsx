import Button from 'component/common/Button/Button';
import Input from 'component/common/Input/Input';
import Modal from 'component/common/Modal/Modal';
import Done from 'component/HomePage/Done/Done';
import InProgress from 'component/HomePage/InProgress/InProgress';
import TaskForm from 'component/HomePage/TaskForm/TaskForm';
import Todo from 'component/HomePage/Todo/Todo';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: NextPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const handleCreateTask = () => {
        setIsModalOpen(true);
        router.push({
            query: { model: 'open' },
        });
    };

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated: () => {
            router.push('/auth/signin');
        },
    });
    return (
        <div className='container mt-5'>
            <div className='row mb-4'>
                <div className='col-md-12 d-flex justify-content-between align-items-center'>
                    <Input type='text' placeholder='Search' style={{ width: '25rem' }} />
                    <Button variant='filled' label='Create Task' onClick={() => handleCreateTask()} />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <Todo />
                </div>
                <div className='col-md-4'>
                    <InProgress />
                </div>
                <div className='col-md-4'>
                    <Done />
                </div>
            </div>
            <Modal
                title='Create'
                onClose={() => {
                    setIsModalOpen(false);
                }}
                isOpen={isModalOpen}>
                <TaskForm onRequestClose={() => setIsModalOpen(false)} action='create' />
            </Modal>
        </div>
    );
};

export default Home;

import Icon from 'component/common/Icon/Icon';
import Label from 'component/common/Label/Label';
import React, { useState } from 'react';
import styles from './Card.module.scss';
// import { faFlag, faClock, faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import TaskForm from 'component/HomePage/TaskForm/TaskForm';
import { useRouter } from 'next/router';
import Modal from 'component/common/Modal/Modal';
import { useAppDispatch } from 'appState/hooks';
import { deleteTask } from 'appState/slice/task.slice';
import { toast } from 'react-toastify';

interface CardProps {
    title: string;
    description: string;
    label: string;
    Priority: string;
    time: string;
    id: string;
}

const Card: React.FC<CardProps> = (props) => {
    const [isModalOpen, setModelOpen] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    let color = 'red';
    if (props.Priority === 'P1') {
        color = 'red';
    } else if (props.Priority === 'P2') {
        color = 'orange';
    } else if (props.Priority === 'P3') {
        color = 'green';
    }

    const handleEdit = () => {
        setModelOpen(true);
        router.push({
            query: {
                model: 'open',
            },
        });
    };

    const handleDelete = () => {
        dispatch(deleteTask(props.id))
            .unwrap()
            .then((res) => {
                if (res) {
                    toast.success('Task deleted');
                }
            })
            .catch(() => {
                toast.error('Unable to delete');
            });
    };
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={`d-flex ${styles.titleContainter}`}>
                    <div style={{ flex: 1 }}>
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                        <Label className={styles.label}>{props.label}</Label>
                    </div>
                    <div className={`${styles.editIcon} d-flex`}>
                        {/* <Icon color='grey' icon={faEdit} onClick={() => handleEdit()} /> */}
                        {/* <Icon color='red' icon={faTrashCan} onClick={() => handleDelete()} /> */}
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.iconContainer}>
                    {/* <Icon color={color} icon={faFlag} /> */}
                    {/* <Icon icon={faClock} text={moment(props.time).format('Do MMM')} /> */}
                </div>
            </div>
            <Modal
                title='Update'
                isOpen={isModalOpen}
                onClose={() => {
                    setModelOpen(false);
                }}>
                <TaskForm id={props.id} onRequestClose={() => setModelOpen(false)} action='update' />
            </Modal>
        </>
    );
};

export default Card;

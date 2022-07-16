import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Icon from '../Icon/Icon';
import styles from './Modal.module.scss';
import { faCross, faClose } from '@fortawesome/free-solid-svg-icons';

ReactModal.setAppElement('#root');

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
};

const Modal: React.FC<ModalProps> = (props) => {
    const handleModal = () => {
        props.onClose();
    };
    return (
        <div>
            <ReactModal closeTimeoutMS={100} isOpen={props.isOpen} className={styles.modal} overlayClassName={styles.myoverlay}>
                <div className={`d-flex justify-content-between align-items-center ${styles.header}`}>
                    <h3>{props.title}</h3>
                    <div onClick={handleModal} style={{ cursor: 'pointer' }}>
                        <Icon icon={faClose} className={styles.closeIcon} />
                    </div>
                </div>
                <div className={styles.body}>
                    {props.children}
                </div>
            </ReactModal>
        </div>
    );
};

export default Modal;

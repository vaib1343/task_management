import React from 'react';
import styles from './CircularButton.module.scss';

interface CircularButtonProps {
    label?: string | React.ReactNode;
    style?: React.CSSProperties;
}

const CircularButton: React.FC<CircularButtonProps> = (props) => {
    return (
        <>
            <button className={`btn d-flex justify-content-center align-items-center ${styles.circularBtn}`}>{props.label}</button>
        </>
    );
};

export default CircularButton;

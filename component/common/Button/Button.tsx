import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <button className={`btn ${styles.btn}`}>{props.label}</button>
        </>
    );
};


export default Button
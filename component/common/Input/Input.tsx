import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string
}

const Input: React.FC<InputProps> = (props) => {
    const { label, className, ...remainProps } = props;
    return (
        <div className='form-group mt-2 mb-2'>
            <label htmlFor={props.id} className={styles.label}>{label}</label>
            <input className={`form-control ${styles.input} ${className}`} {...remainProps} />
            <span className='text-danger' style={{fontSize: '1.2rem'}}>{props.error}</span>
        </div>
    );
};

export default Input;

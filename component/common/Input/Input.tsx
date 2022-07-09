import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = (props) => {
    const { label, className, ...remainProps } = props;
    return (
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <input className={`form-control ${styles.input} ${className}`} {...remainProps} />
        </div>
    );
};

export default Input;

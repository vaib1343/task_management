import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: React.ReactNode;
    variant: 'outline' | 'filled';
}

const Button: React.FC<ButtonProps> = (props) => {
    const { label, variant,className, ...remainingProps} = props;
    return (
        <>
            <button {...remainingProps} className={`btn ${styles.btn} ${styles[variant]} ${className}`}>{label}</button>
        </>
    );
};


export default Button
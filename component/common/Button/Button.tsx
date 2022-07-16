import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant: 'outline' | 'filled';
}

const Button: React.FC<ButtonProps> = (props) => {
    const { label, variant, ...remainingProps} = props;
    return (
        <>
            <button {...remainingProps} className={`btn ${styles.btn} ${styles[variant]}`}>{label}</button>
        </>
    );
};


export default Button
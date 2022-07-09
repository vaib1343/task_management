import React from 'react';
import styles from './Label.module.scss';

interface LabelProps {
    children: React.ReactNode;
    className?: string;
}

const Label: React.FC<LabelProps> = (props) => {
    return (
        <>
            <div className={`${styles.label} ${props.className}`}>{props.children}</div>
        </>
    );
};

export default Label;

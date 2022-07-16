import React from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
    const { className, label, ...remainProps } = props;
    return (
        <div className='form-group mt-2 mb-2'>
            <label className={styles.label} htmlFor={label}>
                {label}
            </label>
            <textarea className={`form-control ${styles.input} ${className}`} id={label} {...props} rows={3}></textarea>
            <span className='text-danger' style={{fontSize: '1.2rem'}}>{props.error}</span>
        </div>
    );
};

export default TextArea;

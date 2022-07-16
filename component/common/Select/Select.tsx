import React from 'react';
import styles from './Select.module.scss';

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    options: Array<{ key: string; value: string }>;
    label: string;
    error: string;
}

const Select: React.FC<SelectProps> = (props) => {
    const { options, label, ...remainingProps } = props;
    return (
        <>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <select {...remainingProps} className={`form-select form-select-sm ${styles.select}`} aria-label='.form-select-sm example'>
                {options.map((el) => (
                    <option key={el.key} value={el.value}>
                        {el.key}
                    </option>
                ))}
            </select>
            <span className='text-danger' style={{fontSize: '1.2rem'}}>{props.error}</span>
        </>
    );
};

export default Select;

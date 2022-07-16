import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import styles from './DatePicker.module.scss';

interface MyDatePickerProps extends ReactDatePickerProps {
    onChange: (e: Date | null) => void;
    label: string;
}
const DatePicker: React.FC<MyDatePickerProps> = (props) => {
    const { label, onChange, value, ...remainingProps } = props;

    return (
        <div className='mt-2'>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <ReactDatePicker {...remainingProps} calendarClassName={styles.calendar} className={styles.datePicker} value={value} onChange={(e) => onChange(e)} />
        </div>
    );
};

export default DatePicker;

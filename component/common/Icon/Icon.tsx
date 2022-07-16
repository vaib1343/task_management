import React from 'react';
import styles from './Icon.module.scss';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface IconProps {
    color?: string;
    text?: string;
}

const Icon: React.FC<FontAwesomeIconProps & IconProps> = (props) => {
    let color;
    if (props.color) {
        color = styles[props.color];
    }
    return (
        <>
            <span className='d-flex'>
                <FontAwesomeIcon {...props} className={`${styles.icon} ${color}`} icon={props.icon} style={props.text ? { marginRight: '1rem' } : {}} /> <h5 className={styles.text}>{props.text}</h5>
            </span>
        </>
    );
};

export default Icon;

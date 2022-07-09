import Icon from 'component/common/Icon/Icon';
import Label from 'component/common/Label/Label';
import React from 'react';
import styles from './Card.module.scss';
import { faFlag, faClock } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
    title: string;
    description: string;
    label: string;
    Priority: string;
}

const Card: React.FC<CardProps> = (props) => {
    let color = 'red';
    if (props.Priority === 'P1') {
        color = 'red';
    } else if (props.Priority === 'P2') {
        color = 'orange';
    } else if (props.Priority === 'P3') {
        color = 'green';
    }
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.titleContainter}>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <Label className={styles.label}>{props.label}</Label>
                </div>
                <div className={styles.iconContainer}>
                    <Icon color={color} icon={faFlag} />
                    <Icon icon={faClock} text='2 march' />
                </div>
            </div>
        </>
    );
};

export default Card;

import CircularButton from 'component/common/CircularButton/CircularButton';
import React from 'react';
import styles from './CardContainer.module.scss';

interface CardContainerProps {
    title: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    count: number;
}

const CardContainer: React.FC<CardContainerProps> = (props) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={`${styles.heading} d-flex align-items-center`}>
                    <h4>{props.title}</h4>
                    <CircularButton label={props.count} />
                </div>
                {props.children}
            </div>
        </>
    );
};

export default CardContainer;

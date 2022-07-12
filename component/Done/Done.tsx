import React, { useEffect } from 'react';
import Card from 'component/shared/Card/Card';
import CardContainer from 'component/shared/CardContainer/CardContainer';
import { useAppDispatch, useAppSelector } from 'appState/hooks';
import { fetchAllTask } from 'appState/slice/task.slice';

const Done = () => {
    const { doneList } = useAppSelector((state) => state.task);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllTask('DONE'));
    }, []);
    return (
        <>
            <CardContainer title='Done' count={doneList.length}>
                {!!doneList.length &&
                    doneList.map((el, index) => (
                        <React.Fragment key={el.id}>
                            <Card title={el.name} description={el.description} label={el.label} Priority={el.priority} time={el.dateCompletion} />
                        </React.Fragment>
                    ))}
            </CardContainer>
        </>
    );
};

export default Done;

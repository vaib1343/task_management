import React, { useEffect } from 'react';
import Card from 'component/shared/Card/Card';
import CardContainer from 'component/shared/CardContainer/CardContainer';
import { useAppDispatch, useAppSelector } from 'appState/hooks';
import { fetchAllTask } from 'appState/slice/task.slice';
import { useRouter } from 'next/router';

const InProgress = () => {
    const { inProgressList } = useAppSelector((state) => state.task);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {taskDelete} = useAppSelector(state => state.task)


    useEffect(() => {
        dispatch(fetchAllTask('INPROGRESS'));
    }, [taskDelete]);

    useEffect(() => {
        if (router.query.model == 'close') {
            dispatch(fetchAllTask('INPROGRESS'));
        }
    }, [router.query.model]);
    return (
        <>
            <CardContainer title='In progress' count={inProgressList.length}>
                {!!inProgressList.length &&
                    inProgressList.map((el, index) => (
                        <React.Fragment key={el.id}>
                            <Card id={el.id} title={el.name} description={el.description} label={el.label} Priority={el.priority} time={el.dateCompletion} />
                        </React.Fragment>
                    ))}
            </CardContainer>
        </>
    );
};

export default InProgress;

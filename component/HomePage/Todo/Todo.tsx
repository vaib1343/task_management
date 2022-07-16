import React, { useEffect } from 'react';
import Card from 'component/shared/Card/Card';
import CardContainer from 'component/shared/CardContainer/CardContainer';
import { useAppDispatch, useAppSelector } from 'appState/hooks';
import { fetchAllTask } from 'appState/slice/task.slice';
import { useRouter } from 'next/router';
const Todo = () => {
    const { todoList } = useAppSelector((state) => state.task);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchAllTask('TODO'));
    }, []);

    useEffect(() => {
        if (router.query.model == 'close') {
            dispatch(fetchAllTask('TODO'));
        }
    }, [router.query.model]);

    return (
        <>
            <CardContainer title='To do' count={todoList.length}>
                {!!todoList.length &&
                    todoList.map((el, index) => (
                        <React.Fragment key={el.id}>
                            <Card title={el.name} description={el.description} label={el.label} Priority={el.priority} time={el.dateCompletion}/>
                        </React.Fragment>
                    ))}
            </CardContainer>
        </>
    );
};

export default Todo;

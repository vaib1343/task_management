import React from 'react';
import Card from 'component/shared/Card/Card';
import CardContainer from 'component/shared/CardContainer/CardContainer';

const Todo = () => {
    return (
        <>
            <CardContainer title='To do'>
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P2' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P3' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
            </CardContainer>
        </>
    );
};

export default Todo;

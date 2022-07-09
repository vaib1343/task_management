import Button from 'component/common/Button/Button';
import Card from 'component/shared/Card/Card';
import CardContainer from 'component/shared/CardContainer/CardContainer';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className='container mt-5'>
            <div className="row mb-4">
                <div className="col-md-12 d-flex">
                    <Button label='Create Task'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
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
                </div>
                <div className='col-md-4'>
                    <CardContainer title='In Progress'>
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                    </CardContainer>
                </div>
                <div className='col-md-4'>
                    <CardContainer title='Done'>
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                        <Card title='Post about typescript' description='Interface Type' label='Typescript' Priority='P1' />
                    </CardContainer>
                </div>
            </div>
        </div>
    );
};

export default Home;

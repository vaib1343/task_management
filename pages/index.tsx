import Button from 'component/common/Button/Button';
import Input from 'component/common/Input/Input';
import Done from 'component/Done/Done';
import InProgress from 'component/InProgress/InProgress';
import Todo from 'component/Todo/Todo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className='container mt-5'>
            <div className='row mb-4'>
                <div className='col-md-12 d-flex justify-content-between align-items-center'>
                    <Input type='text' placeholder='Search' style={{ width: '25rem' }} />
                    <Button label='Create Task' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <Todo />
                </div>
                <div className='col-md-4'>
                    <InProgress />
                </div>
                <div className='col-md-4'>
                    <Done />
                </div>
            </div>
        </div>
    );
};

export default Home;

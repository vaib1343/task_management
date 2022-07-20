import Image from 'next/image';
import React from 'react';
import SignInForm from './SignInForm/SignInForm';

function SignIn() {
    return (
        <div className='d-flex justify-content-evenly align-items-center'>
            <div className='w-50' style={{marginTop: '10rem'}}>
                <img src='/task.jpg' height='100%' width='100%' />
            </div>
            <div className='w-50 d-flex justify-content-center'>
                <SignInForm />
            </div>
        </div>
    );
}

export default SignIn;

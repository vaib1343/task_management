import Image from 'next/image';
import React from 'react';
import SignInForm from './SignInForm/SignInForm';

function SignIn() {
    return (
        <div className='w-50 m-auto d-flex justify-content-center align-items-center'>
           <SignInForm/>
        </div>
    );
}

export default SignIn;

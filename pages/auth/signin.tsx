import { NextPage } from 'next';
import React from 'react';
import SignIn from 'component/SignInPage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Signin: NextPage = () => {
    const {data: session} = useSession();
    const router = useRouter();

    if(session){
        router.push('/');
        return <></>
    }
    return (
        <div className='w-100 mt-5'>
            <SignIn/>
        </div>
    );
};

export default Signin;

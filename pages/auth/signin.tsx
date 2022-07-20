import { NextPage } from 'next';
import React from 'react';
import SignIn from 'component/SignInPage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const signin: NextPage = () => {
    const {data: session} = useSession();
    const router = useRouter();

    if(session){
        router.push('/');
        return <></>
    }
    return (
        <div>
            <SignIn />
        </div>
    );
};

export default signin;

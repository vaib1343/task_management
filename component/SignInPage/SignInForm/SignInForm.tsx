import Button from 'component/common/Button/Button';
import Input from 'component/common/Input/Input';
import React, { useEffect, useState } from 'react';
import styles from './SignInForm.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const handleSignIn = async (provider: string) => {
        const data = await signIn(provider);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email');
            return;
        }
        signIn('email', { email, redirect: false });
    };

    return (
        <div className={styles.cardContainer}>
            <div className='d-flex flex-column mb-5'>
                <Input placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Button variant='outline' label='SignIn' className='mt-3' onClick={handleSubmit} />
            </div>
            <div className='w-100 d-flex flex-column'>
                <Button variant='filled' onClick={() => handleSignIn('github')} label='SignIn with github' className='mb-2' />
                <Button variant='filled' onClick={() => handleSignIn('github')} label='SignIn with Google' className='mb-2' />
                <Button variant='filled' onClick={() => handleSignIn('twitter')} label='SignIn with Twitter' className='mb-2' />
            </div>
        </div>
    );
};

export default SignInForm;

import Button from 'component/common/Button/Button';
import Input from 'component/common/Input/Input';
import React, { useEffect, useState } from 'react';
import styles from './SignInForm.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { AiFillGithub, AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';

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
            <h1 className='text-center'>Sign In</h1>
            <div className='d-flex flex-column mb-2'>
                <Input label='Email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Input label='Password' placeholder='Enter Password' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Button variant='filled' label='SignIn' className='mt-5' onClick={handleSubmit} />
            </div>
            <a className={styles.signupLink}>Dont have an account?</a>
            <div className='w-75 m-auto d-flex justify-content-between align-item-center mt-5'>
                <Button  variant='filled' onClick={() => handleSignIn('github')} label={<AiFillGithub />} className={styles.icon} />
                <Button variant='filled' onClick={() => handleSignIn('google')} label={<AiFillGoogleCircle />} className={styles.icon} />
                <Button variant='filled' onClick={() => handleSignIn('twitter')} label={<AiFillTwitterCircle />} className={styles.icon} />
            </div>
        </div>
    );
};

export default SignInForm;

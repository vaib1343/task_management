import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { signOut, useSession } from 'next-auth/react';
const Navbar = () => {
    const [dropdown, setdropdown] = useState(false);
    const { data: session } = useSession();
    return (
        <>
            <div className={styles.container}>
                <h5 className={styles.heading}>Task Manager</h5>
                {session && (
                    <div className={`navbar-nav ${styles.dropdown}`}>
                        <a className='nav-link' href='#' role='button' onClick={() => setdropdown(!dropdown)}>
                            <img src={session.user?.image || 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg'} width='40' height='40' className='rounded-circle' />
                        </a>
                        <span style={{ color: 'white' }}>{session.user?.name}</span>
                        {dropdown && (
                            <ul>
                                <li
                                    onClick={() =>
                                        signOut({
                                            redirect: true,
                                            callbackUrl: '/auth/signin',
                                        })
                                    }>
                                    Logout
                                </li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;

import type { AppProps } from 'next/app';
import store from 'appState/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';
import Navbar from 'component/shared/Navbar/Navbar';
import 'react-datepicker/dist/react-datepicker.css';
import { SessionProvider } from 'next-auth/react';
import { HtmlHTMLAttributes, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('light');

    const handleTheme = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) {
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return (
        <>
            <Provider store={store}>
                <SessionProvider session={pageProps.session}>
                    <main className={theme}>
                        <Navbar setTheme={handleTheme} />
                        <Component {...pageProps} />
                        <ToastContainer />
                        <div id='root' />
                    </main>
                </SessionProvider>
            </Provider>
        </>
    );
}

export default MyApp;

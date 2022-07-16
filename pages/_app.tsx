import type { AppProps } from 'next/app';
import store from 'appState/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';
import Navbar from 'component/shared/Navbar/Navbar';
import 'react-datepicker/dist/react-datepicker.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer />
            <div id='root' />
        </Provider>
    );
}

export default MyApp;

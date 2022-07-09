import type { AppProps } from 'next/app';
import store from '../redux/store';
import { Provider } from 'react-redux';
import '../styles/global.scss';
import Navbar from 'component/shared/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

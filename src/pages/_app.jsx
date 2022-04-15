import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;

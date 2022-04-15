import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript, theme } from '@chakra-ui/react';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

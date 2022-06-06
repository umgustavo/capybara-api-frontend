import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
                <meta charSet='UTF-8' />
                <meta name='description' content='Capybara API — Capybara images & facts API.' />
                <meta name='keywords' content='capybara, api, rest api, javascript, nodejs' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                <meta property='og:title' content='Capybara API — Capybara images & facts API.' />
                <meta
                    property='og:description'
                    content='Capybara API</b> is a public API that provides cool images & facts about capybaras.'
                />
                <meta property='og:image' content='https://api.capybara-api.xyz/v1/image/OmPxdNP' />
                <meta property='og:image:width' content='960' />
                <meta property='og:image:height' content='686' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta
                    name='twitter:image'
                    content='https://api.capybara-api.xyz/v1/image/OmPxdNP'
                />
                <meta
                    name='twitter:image:src'
                    content='https://api.capybara-api.xyz/v1/image/OmPxdNP'
                />
                <meta name='twitter:image:width' content='960' />
                <meta name='twitter:image:height' content='686' />

                <meta property='og:locale' content='en_US' />
                <meta name='theme-color' content='#FF2EA6' />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp

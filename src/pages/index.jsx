import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link,
    Text,
    VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
    return (
        <>
            <Head>
                <title>CapybaraAPI — Capybara images {'&'} facts API.</title>
            </Head>
            <Box>
                <NavBar mb={[5, 5, 10]} />
                <Container maxW='container.lg'>
                    <VStack spacing={10} align='stretch'>
                        <Box
                            d={['block', 'block', 'flex']}
                            gap='32px'
                            justifyContent='space-between'
                            alignItems={['normal', 'normal', 'center']}
                        >
                            <Image
                                src='https://storage.googleapis.com/capybara-api/VTFfldd.png'
                                alt='Capybara Image'
                                borderRadius='xl'
                                w={['100%', '100%', '50%']}
                                userSelect='none'
                                draggable='false'
                                mb={[2, 2, 0]}
                            />
                            <Box pb={[0, 0, 20]}>
                                <Heading fontSize={['xl', '2xl', '3xl']}>
                                    “Capybaras are fantastic swimmers!”
                                </Heading>
                                <Button
                                    colorScheme='purple'
                                    w='100%'
                                    mt={[2, 2, 10]}
                                    borderRadius='xl'
                                >
                                    Generate More
                                </Button>
                            </Box>
                        </Box>
                        <Box>
                            <Heading>About</Heading>
                            <Text fontSize='xl'>
                                <b>CapybaraAPI</b> is a public API that provides
                                cool images {'&'} facts about capybaras.
                            </Text>
                        </Box>
                        <Box>
                            <Heading>Contribute</Heading>
                            <Text fontSize='xl'>
                                This project is open source and you can
                                contribute on my{' '}
                                <Link
                                    color='pink.500'
                                    href='https://github.com/umgustavo/capybara-api'
                                    target='_blank'
                                >
                                    GitHub Repository
                                </Link>
                                .
                            </Text>
                        </Box>
                        <Box>
                            <Heading>Donate</Heading>
                            <Text fontSize='xl'>
                                If you liked the project and want to support it
                                financially, you can{' '}
                                <Link
                                    color='pink.500'
                                    href='https://www.buymeacoffee.com/umgustavo'
                                    target='_blank'
                                >
                                    buy me a coffee
                                </Link>{' '}
                                ;)
                            </Text>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </>
    );
}

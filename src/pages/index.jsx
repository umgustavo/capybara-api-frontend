import { useState, useEffect } from 'react';
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
import axios from 'axios';

export default function Home() {
    const [imageURL, setImageURL] = useState(
        'https://api.capybara-api.xyz/v1/image/v8HVS23?size=large'
    );
    const [fact, setFact] = useState('');
    const [isGenerating, setIsGenerating] = useState(true);
    const [initialized, setInitialized] = useState(false);

    async function handleGenerate() {
        console.log('gerando');
        setIsGenerating(true);

        const imageReq = await axios.get(
            'https://api.capybara-api.xyz/v1/image/random'
        );
        const factReq = await axios.get(
            'https://api.capybara-api.xyz/v1/facts/random?lang=en_us'
        );

        const imageURL = imageReq.data.image_urls.large;
        const fact = factReq.data.fact;

        if (imageURL && fact) {
            setImageURL(imageURL);
            setFact(`“${fact}”`);
        }

        setIsGenerating(false);
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            handleGenerate();
            setTimeout(() => {
                setInitialized(true);
            }, 1500);
        });
    }, []);

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
                            transition='opacity 1s ease-out'
                            opacity={initialized ? 1 : 0}
                        >
                            <Image
                                src={imageURL}
                                alt='Capybara Image'
                                borderRadius='xl'
                                w={['100%', '100%', '50%']}
                                userSelect='none'
                                draggable='false'
                                mb={[2, 2, 0]}
                            />
                            <Box pb={[0, 0, 20]}>
                                <Heading
                                    fontSize={['xl', '2xl', '3xl']}
                                    transition='all 0.2s ease-out'
                                >
                                    {fact}
                                </Heading>
                                <Button
                                    colorScheme='purple'
                                    w='100%'
                                    mt={[2, 2, 10]}
                                    borderRadius='xl'
                                    onClick={handleGenerate}
                                    isLoading={isGenerating}
                                    isDisabled={isGenerating}
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

import { useState, useEffect } from 'react'
import { Box, Button, Container, Heading, Image, Link, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState({})
    const [started, setStarted] = useState(false)
    const [isGenerating, setIsGenerating] = useState(true)

    async function handleGenerate() {
        setIsGenerating(true)

        let _data = {}
        axios
            .get('https://api.capybara-api.xyz/v1/image/random')
            .then((res) => {
                _data.imageURL = res.data.image_urls.medium
                axios.get('https://api.capybara-api.xyz/v1/facts/random?lang=en_us').then((res) => {
                    _data.fact = `“${res.data.fact}”`
                    setData(_data)
                    setIsGenerating(false)
                    if (!started) setStarted(true)
                })
            })
            .catch((err) => {
                console.log(err)
                setIsGenerating(false)
            })
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            handleGenerate()
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Head>
                <title>Capybara API — Capybara images {'&'} facts API.</title>
            </Head>
            <Box>
                <NavBar mb={[5, 5, 10]} />
                <Container maxW='container.lg'>
                    <VStack spacing={10} align='stretch' mb={10}>
                        <Box
                            d={['block', 'block', 'flex']}
                            gap='32px'
                            justifyContent='space-between'
                            alignItems={['normal', 'normal', 'center']}
                            transition='all 0.2s'
                            opacity={started ? 1 : 0}
                        >
                            <Image
                                src={data.imageURL}
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
                                    {data.fact}
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
                                <b>Capybara API</b> is a public API that provides cool images {'&'}{' '}
                                facts about capybaras.
                            </Text>
                        </Box>
                        <Box>
                            <Heading>Contribute</Heading>
                            <Text fontSize='xl'>
                                This project is open source and you can contribute on my{' '}
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
                                If you liked the project and want to support it financially, you can{' '}
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
    )
}

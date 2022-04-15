import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { DiGithubAlt } from 'react-icons/di';
import { GiCapybara } from 'react-icons/gi';

export default function NavBar(props) {
    return (
        <Box
            py={5}
            borderBottom='1px'
            borderColor='gray.100'
            as='nav'
            {...props}
        >
            <Container
                maxW='container.xl'
                d='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                <Box d='flex' alignItems='center'>
                    <GiCapybara size={36} marginRight='16px' />
                    <Heading
                        pl={2}
                        d={['none', 'inline-block', 'inline-block']}
                    >
                        CapybaraAPI
                    </Heading>
                </Box>
                <HStack spacing='16px'>
                    <Link
                        passHref
                        href='https://github.com/umgustavo/capybara-api'
                        target='_blank'
                    >
                        <IconButton
                            icon={<DiGithubAlt size={36} />}
                            alt='GitHub'
                            background='none'
                            borderRadius='full'
                        />
                    </Link>
                    <Link passHref href='https://docs.capybara-api.xyz'>
                        <Button colorScheme='pink' borderRadius='xl'>
                            Docs
                        </Button>
                    </Link>
                </HStack>
            </Container>
        </Box>
    );
}

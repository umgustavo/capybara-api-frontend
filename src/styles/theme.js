import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const theme = extendTheme({
    colors: colors,
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
        body: '"DM Sans", sans-serif',
        heading: '"DM Sans", serif',
        mono: '"JetBrains Mono", monospace',
    },
});

export default theme;

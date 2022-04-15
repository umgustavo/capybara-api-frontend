import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const config = {
    colors: colors,
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
        body: '"DM Sans", sans-serif',
        heading: '"DM Sans", serif',
        mono: '"JetBrains Mono", monospace',
    },
};

const theme = extendTheme(config);

export default theme;

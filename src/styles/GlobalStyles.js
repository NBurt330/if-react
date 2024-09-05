import { createUseStyles } from 'react-jss';

const globalStyles = {
    '@global': {
        '*': {
            margin: 0,
            boxSizing: 'border-box',
            fontFamily: 'Roboto, sans-serif',
        },

        main: {
            display: 'flex',
            flexDirection: 'column',
        },

        title: {
            fontWeight: '500',
            fontSize: 40,
            lineHeight: '47px',
        },

        '@media (min-width: 1024px)': {
            /*for mobile tablets*/

            colLg1: {
                width: '8.33%',
            },

            colLg2: {
                width: '16.66%',
            },

            colLg3: {
                width: '25%',
            },

            colLg4: {
                width: '33.33%',
            },

            colLg5: {
                width: '41.66%',
            },

            colLg6: {
                width: '50%',
            },

            colLg7: {
                width: '58.33%',
            },

            colLg8: {
                width: '66.66%',
            },

            colLg9: {
                width: '75%',
            },

            colLg10: {
                width: '83.33%',
            },

            colLg11: {
                width: '91.66%',
            },

            colLg12: {
                width: '100%',
            },
        },

        '@media (max-width: 1024px)': {
            /*for mobile tablets*/

            colMd1: {
                width: '8.33%',
            },

            colMd2: {
                width: '16.66%',
            },

            colMd3: {
                width: '25%',
            },

            colMd4: {
                width: '33.33%',
            },

            colMd5: {
                width: '41.66%',
            },

            colMd6: {
                width: '50%',
            },

            colMd7: {
                width: '58.33%',
            },

            colMd8: {
                width: '66.66%',
            },

            colMd9: {
                width: '75%',
            },

            colMd10: {
                width: '83.33%',
            },

            colMd11: {
                width: '91.66%',
            },

            colMd12: {
                width: '100%',
            },
        },

        '@media (max-width: 768px)': {
            /*for mobile phones*/

            colSm1: {
                width: '16.66%',
            },

            colSm2: {
                width: '33.33%',
            },

            colSm3: {
                width: '50%',
            },

            colSm4: {
                width: '66.66%',
            },

            colSm5: {
                width: '83.33%',
            },

            colSm6: {
                width: '100%',
            },
        },

        '@font-face': [
            {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontDisplay: 'swap',
                src: `
      local('Roboto Regular'),
        local('Roboto-Regular'),
        url(./../fonts/roboto-regular-latin-ext.woff2) format('woff2')`,
                unicodeRange: `U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
    U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            },

            {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontDisplay: 'swap',
                src: `
      local('Roboto Regular'),
        local('Roboto-Regular'),
        url(./../fonts/roboto-regular-latin.woff2) format('woff2')`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
    U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            },

            {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontDisplay: 'swap',
                src: `
      local('Roboto Medium'),
        local('Roboto-Medium'),
        url(./../fonts/roboto-medium-latin-ext.woff2) format('woff2')`,
                unicodeRange: `U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
    U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            },
            {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontDisplay: 'swap',
                src: `
      local('Roboto Medium'),
        local('Roboto-Medium'),
        url(./../fonts/roboto-medium-latin.woff2) format('woff2')`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
    U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            },
        ],
    },
};

export const useGlobalStyles = createUseStyles(globalStyles);

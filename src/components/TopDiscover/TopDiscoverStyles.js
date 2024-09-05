import { createUseStyles } from 'react-jss';

export const topDiscoverStyles = (theme) => ({
    topDiscover: {
        marginBottom: 145,
        fontWeight: '500',
        fontSize: 50,
        lineHeight: '59px',
        color: theme.mainColor,
    },

    '@media (max-width: 1024px)': {
        /*for mobile tablets*/

        topDiscover: {
            marginBottom: 120,
            fontWeight: '500',
            fontSize: 40,
            lineHeight: '48px',
        },
    },
    '@media (max-width: 768px)': {
        /*for mobile phones*/

        topDiscover: {
            marginBottom: 31,
            fontWeight: '500',
            fontSize: 30,
            lineHeight: '35px',
        },
    },
});

export const useTopDiscoverStyles = createUseStyles(topDiscoverStyles);

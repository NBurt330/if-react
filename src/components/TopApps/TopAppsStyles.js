import { createUseStyles } from 'react-jss';

export const topAppsStyles = () => ({
    apps: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        gap: 16,
    },

    googlePlay: {
        width: 135,
        height: 40,
    },

    appleStore: {
        width: 120,
        height: 40,
    },

    '@media (max-width: 1024px)': {
        /*for mobile tablets*/
        apps: {
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
        },

        googlePlay: {
            width: 135,
            height: 40,
        },

        appleStore: {
            width: 120,
            height: 40,
        },
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/
        apps: {
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
        },
    },
});

export const useTopAppsStyles = createUseStyles(topAppsStyles);

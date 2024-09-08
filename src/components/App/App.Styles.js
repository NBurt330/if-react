import { createUseStyles } from 'react-jss';

export const appStyles = (theme) => ({
    top: {
        minHeight: '100vh',

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },

    topContainer: {
        marginTop: 196,
        paddingBottom: 120,
    },

    '@media (max-width: 1024px)': {
        /*for mobile tablets*/

        topSearchLarge: {
            display: 'none',
        },
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/

        topSearchForm: {
            position: 'relative',
            zIndex: 25,
        },

        topSearch: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 120,
            backgroundColor: theme.mainColor,
            borderRadius: 8,
        },
    },
});

export const useAppStyles = createUseStyles(appStyles);

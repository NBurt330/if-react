import { createUseStyles } from 'react-jss';

export const headerStyles = (theme) => ({
    header: {
        paddingTop: 51,
    },

    topSection: {
        position: 'relative',
        paddingBottom: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 1,
        zIndex: 29,
    },

    headerLogo: {
        width: 205,
        height: 40,
        color: theme.accentSecond,
    },

    navigation: {
        width: 343,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerLists: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        gap: 24,
    },

    headerList: {
        position: 'relative',
    },

    headerLink: {
        textDecoration: 'none',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: '28px',
        color: theme.mainColor,

        /*       '&::after': {
            display: 'block',
            content: '',
            width: 0,
            height: 4,
            backgroundColor: theme.accentFirst,
            position: 'absolute',
            bottom: '-12px',
            right: 'calc(50% - 84.75% / 2)',
            transition: 'all 600ms ease-out',
        },

        '&:hover::after': {
            width: '84.75%',
        }, */
    },

    headerButton: {
        width: 30,
        aspectRatio: '1 / 1',
        color: theme.mainColor,

        '&:hover': {
            color: theme.accentFirst,
        },
    },

    headerAccount: {
        width: 40,
        aspectRatio: '1 / 1',
        color: theme.mainColor,

        '&:hover': {
            color: theme.accentFirst,
        },
    },

    headerMenu: {
        display: 'none',
    },

    headerMenuButton: {
        width: 24,
        height: 16,
    },

    '@media (max-width: 1024px)': {
        /*for mobile tablets*/
        header: {
            padding: '12px 16px',
        },

        topSection: {
            paddingBottom: 0,
        },

        headerLogo: {
            width: 122,
            height: 24,
        },

        headerLists: {
            gap: 16,
        },

        headerLink: {
            display: 'none',
        },

        headerButton: {
            width: 16,
        },

        headerAccount: {
            width: 24,
        },

        headerMenu: {
            display: 'contents',
        },

        headerMenuButton: {
            width: 24,
        },
    },
});

export const useHeaderStyles = createUseStyles(headerStyles);

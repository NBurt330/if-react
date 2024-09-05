import { createUseStyles } from 'react-jss';

export const footerStyles = (theme) => ({
    footer: {
        backgroundColor: theme.secondColor,
    },

    footerContainer: {
        maxWidth: 1264,
        margin: '0 auto',
        padding: '120px 16px',
        display: 'flex',
        flexDirection: 'column',
    },

    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 64,
        marginLeft: -8,
        marginRight: -8,
    },

    logo: {
        display: 'none',
    },

    column: {
        paddingLeft: 8,
        paddingRight: 8,
    },

    headlines: {
        fontWeight: '500',
        fontSize: 20,
        color: theme.mainColor,
        lineHeight: '23px',
        paddingBottom: 24,
    },

    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontWeight: '400',
        fontSize: 20,
        color: theme.mainColor,
        lineHeight: '23px',
    },

    link: {
        textDecoration: 'none',
        color: theme.mainColor,
    },

    copyright: {
        paddingLeft: 1,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: '16px',
        color: theme.mainColor,
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/

        logo: {
            width: 98,
            height: 19,
            display: 'flex',
            margin: '0 auto 40px',
            color: theme.mainColor,
        },

        top: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginLeft: -8,
            marginRight: -8,
            marginBottom: 32,
        },

        column: {
            flexBasis: 'fit-content',
        },

        headlines: {
            fontWeight: '500',
            fontSize: 15,
            color: theme.mainColor,
            textDecoration: 'underline',
            lineHeight: '18px',
            paddingBottom: 0,
        },

        links: {
            display: 'none',
        },

        copyright: {
            fontSize: 12,
            lineHeight: '14px',
            textAlign: 'center',
        },
    },
});

export const useFooterStyles = createUseStyles(footerStyles);

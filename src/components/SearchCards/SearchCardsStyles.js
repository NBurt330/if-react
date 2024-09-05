import { createUseStyles } from 'react-jss';

export const searchCardsStyles = (theme) => ({
    pictures: {
        marginRight: -8,
        marginLeft: -8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 120,
        textDecoration: 'none',
        position: 'relative',
        zIndex: 7,

        '&::before': {
            display: 'block',
            content: '',
            width: 40,
            aspectRatio: '1/1',
            backgroundColor: theme.backgroundSecond,
            borderRadius: '50%',
            boxShadow: '0 4px 4px 0 #00000040',
            position: 'absolute',
            right: 8,
            top: 'calc1((00% - 259px) / 2)',
            transform: 'translate(50%, -50%)',
            zIndex: 8,
        },

        '&::after': {
            display: 'block',
            content: '',
            width: 8,
            height: 18,
            backgroundSize: 'cover',
            background: 'url(../../images/arrow.svg) no-repeat center',
            position: 'absolute',
            right: 8,
            top: 'calc((100% - 259px) / 2)',
            transform: 'translate(50%, -50%)',
            zIndex: 9,
        },
    },

    picture: {
        paddingLeft: 8,
        paddingRight: 8,
        objectPosition: 'center',
        textDecoration: 'none',
        width: '25%',
    },

    images: {
        width: '100%',
        aspectRatio: '1/1',
        objectFit: 'fill',
    },

    name: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: '28px',
        color: theme.accentSecond,
        paddingTop: 22,
        paddingBottom: 26,
        textDecoration: 'none',
    },

    location: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: '28px',
        color: theme.accentText,
        textDecoration: 'none',
    },

    '@media (max-width: 1024px)': {
        picture: {
            width: '33%',
        },
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/
        pictures: {
            paddingBottom: 40,

            '&::before': {
                width: 28,
                boxShadow: 'none',
                right: -4,
                top: 'calc((100% - 94px) / 2)',
                transform: 'translate(0, -50%)',
            },

            '&::after': {
                width: 5,
                height: 13,
                right: 8,
                bottom: 'unset',
                top: 'calc((100% - 94px) / 2)',
            },
        },

        picture: {
            width: '50%',
        },

        name: {
            fontSize: 12,
            lineHeight: '14px',
            paddingTop: 4,
            paddingBottom: 4,
        },

        location: {
            fontSize: 12,
            lineHeight: '14px',
        },
    },
});

export const useSearchCardsStyles = createUseStyles(searchCardsStyles);

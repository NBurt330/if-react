import { createUseStyles } from 'react-jss';

export const homesStyles = (theme) => ({
    homesTitle: {
        paddingTop: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto 105px',
    },

    homesPictures: {
        marginRight: -8,
        marginLeft: -8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 120,
        position: 'relative',
        zIndex: 7,

        '&::before': {
            display: 'block',
            content: '',
            width: 40,
            aspectRatio: '1/1',
            backgroundColor: theme.backgroundSecond,
            borderRadius: '50%',
            boxShadow: '0px 4px 4px 0px #00000040',
            position: 'absolute',
            right: 8,
            top: (100 % -259) / 2,
            transform: 'translate(50%, -50%)',
            zIndex: 8,
        },

        '&::after': {
            display: 'block',
            content: '',
            width: 8,
            height: 18,
            backgroundSize: 'cover',
            background: 'url(./../../images/arrow.svg) no-repeat center',
            position: 'absolute',
            right: 8,
            top: (100 % -259) / 2,
            transform: 'translate(50%, -50%)',
            zIndex: 9,
        },
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/
        homesTitle: {
            paddingTop: 40,
            margin: '0 auto 32px',
        },

        homesPictures: {
            paddingBottom: 40,

            '&::before': {
                width: 28,
                boxShadow: 'none',
                right: -4,
                top: (100 % -94) / 2,
                transform: 'translate(0, -50%)',
            },

            '&::after': {
                width: 5,
                height: 13,
                right: 8,
                bottom: 'unset',
                top: (100 % -94) / 2,
            },
        },
    },
});

export const useHomesStyles = createUseStyles(homesStyles);

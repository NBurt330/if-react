import { createUseStyles } from 'react-jss';

export const hotelPageStyles = () => ({
    root: {
        backgroundColor: '#acb1b9',
    },

    title: {
        margin: '0 auto',
        paddingTop: 134,
        paddingBottom: 54,
    },

    images: {
        display: 'flex',
        justifyItems: 'center',
        maxWidth: '33%',
        aspectRatio: '1/1',
        objectFit: 'fill',
        paddingBottom: 36,
    },

    location: {
        paddingBottom: 120,
        display: 'flex',
        justifyItems: 'center',
        maxWidth: '33%',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: '28px',
    },

    footer: {
        backgroundColor: '#10367c',
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/

        location: {
            display: 'flex',
            justifyItems: 'center',
            fontSize: 12,
            lineHeight: '14px',
        },
    },
});

export const useHotelPageStyles = createUseStyles(hotelPageStyles);

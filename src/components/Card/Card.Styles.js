import { createUseStyles } from 'react-jss';

export const cardStyles = (theme) => ({
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
    },

    location: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: '28px',
        color: theme.accentText,
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/
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

export const useCardStyles = createUseStyles(cardStyles);

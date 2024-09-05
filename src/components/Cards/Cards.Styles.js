import { createUseStyles } from 'react-jss';

export const cardsStyles = () => ({
    picture: {
        paddingLeft: 8,
        paddingRight: 8,
        objectPosition: 'center',
        width: '25%',
    },

    '@media (max-width: 1024px)': {
        picture: {
            width: '33.33%',
        },
    },

    '@media (max-width: 768px)': {
        /*for mobile phones*/
        picture: {
            width: '50%',
        },
    },
});

export const useCardsStyles = createUseStyles(cardsStyles);

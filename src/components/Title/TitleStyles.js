import { createUseStyles } from 'react-jss';

export const titleStyles = () => ({
    title: {
        fontWeight: '500',
        fontSize: 40,
        lineHeight: '47px',
    },
});
export const useTitleStyles = createUseStyles(titleStyles);

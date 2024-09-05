import { createUseStyles } from 'react-jss';

export const containerStyles = () => ({
    container: {
        maxWidth: 1264,
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto',
    },
});

export const useContainerStyles = createUseStyles(containerStyles);

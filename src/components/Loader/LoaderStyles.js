import { createUseStyles } from 'react-jss';

export const LoaderStyles = () => ({
    spinner: {
        border: '8px solid #f3f3f3' /* Light grey */,
        borderTop: '8px solid #3498db' /* Blue */,
        borderRadius: '50%',
        width: 50,
        height: 50,
        animation: 'spin 1s linear infinite',
        margin: '0 auto' /* Center the spinner */,
    },

    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    },
});

export const useLoaderStyles = createUseStyles(LoaderStyles);

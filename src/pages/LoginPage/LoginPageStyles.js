import { createUseStyles } from 'react-jss';

export const LoginPageStyles = (theme) => ({
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        margin: '171px auto 0',
        border: `1px solid rgba(22, 24, 35, 0.12)`,
        backgroundColor: '#ffffff',
    },

    title: {
        fontWeight: '500',
        fontSize: 24,
        lineHeight: '28px',
        marginTop: 36,
        color: '#130303',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: 320,
        padding: '32px 0 0 0',
        borderRadius: 8,
        boxSizing: 'content-box',
    },

    label: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: '19px',
        color: theme.border,
        paddingBottom: 4,
    },

    field: {
        color: theme.mainColor,
        padding: '8px 16px',
        fontSize: 18,
        lineHeight: '21px',
        border: `2px solid ${theme.borderForm}`,
        borderRadius: 8,
        marginBottom: 16,
    },

    button: {
        border: 'none',
        width: 320,
        backgroundColor: '#3077C6',
        padding: '8px 0 8px 0',
        marginBottom: 36,
        borderRadius: 8,
        fontWeight: '500',
        fontSize: 24,
        lineHeight: '28px',
        color: '#ffffff',
    },

    top: {
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
});

export const useLoginPageStyles = createUseStyles(LoginPageStyles);

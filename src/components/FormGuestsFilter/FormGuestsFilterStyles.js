import { createUseStyles } from 'react-jss';

export const formGuestsFilterStyles = (theme) => ({
    guestsFilter: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        backgroundColor: theme.mainColor,
        width: 'clamp(249px, 21%, 259px)',
        padding: '22px 22px 10px 22px',
        borderRadius: 8,
        zIndex: 26,
        position: 'absolute',
        right: '15.5%',
        top: 76,
    },

    guestFilter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    disabled: {
        display: 'none',
    },

    labelFilter: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: '19px',
        color: theme.border,
        flexGrow: 1,
    },

    btnMinus: {
        width: 30,
        aspectRatio: '1 / 1',
        outline: 0,
        border: `1px solid ${theme.accentSecond}`,
        backgroundColor: theme.mainColor,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: '21px',
    },

    guestInput: {
        border: 'none',
        width: 'clamp(46px, 21%, 48px)',
        textAlign: 'center',
    },

    btnPlus: {
        width: 30,
        aspectRatio: '1 / 1',
        outline: 0,
        border: `1px solid ${theme.accentSecond}`,
        backgroundColor: theme.mainColor,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: '21px',
    },

    btnDisabled: {
        border: `1px solid ${theme.borderForm}`,
    },

    children: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 16,
        marginLeft: -3,
        gap: 12,
    },

    childrenLabel: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: '14px',
        textAlign: 'left',
    },

    childrenWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },

    childrenOption: {
        maxWidth: 99,
        padding: '6px 6px 6px 4px',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: '14px',
        textAlign: 'left',
        borderColor: theme.accentSecond,
    },
});

export const useFormGuestsFilterStyles = createUseStyles(
    formGuestsFilterStyles
);

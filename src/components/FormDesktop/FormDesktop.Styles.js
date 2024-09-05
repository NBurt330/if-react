import { createUseStyles } from 'react-jss';

export const formDesktopStyles = (theme) => ({
    topSearchForm: {
        position: 'relative',
        zIndex: 25,
    },

    topSearch: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 120,
        backgroundColor: theme.mainColor,
        borderRadius: 8,
    },

    searchColumn: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },

    searchColumnCity: {
        width: 'clamp(278px, 38%, 467px)',
        position: 'relative',
        zIndex: 1,
    },

    searchColumnData: {
        width: 'clamp(249px, 21%, 259px)',
        position: 'relative',
        zIndex: 10,
    },

    searchColumnGuests: {
        width: 'clamp(294px, 25.5%, 314px)',
    },

    searchColumnButton: {
        width: '15.5%',
    },

    searchSmall: {
        display: 'none',
    },

    searchField: {
        paddingTop: 22,
        paddingBottom: 21,
        paddingInlineStart: 24,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: '21px',
        color: theme.text,
        border: 'none',
    },

    searchLabel: {
        padding: '0 0 24px 24px',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: '21px',
        color: theme.mainColor,
    },

    searchFieldCity: {
        borderRadius: 8,

        '&:hover': {
            paddingTop: 19,
            paddingBottom: 18,
            border: `${theme.accentFirst} solid 3px`,
        },

        '&:focus - visible': {
            outline: 'none',
            paddingTop: 19,
            paddingBottom: 18,
            border: `${theme.accentFirst} solid 3px`,
        },
    },

    searchLabelCity: {
        position: 'absolute',
        top: -45,
        left: 0,
        zIndex: 2,
    },

    searchLabelData: {
        position: 'absolute',
        top: -45,
        left: 0,
        zIndex: 11,
    },

    searchFieldData: {
        paddingTop: 20,
        paddingBottom: 21,
        border: `${theme.borderForm} solid 1px`,
        borderRadius: 8,

        '&:hover': {
            paddingTop: 19,
            paddingBottom: 18,
            border: `${theme.accentFirst} solid 3px`,
        },

        '&:focus-visible': {
            outline: 'none',
            paddingTop: 19,
            paddingBottom: 18,
            border: `${theme.accentFirst} solid 3px`,
        },
    },

    searchFieldGuests: {
        borderRadius: 8,

        '&:hover': {
            paddingTop: 19,
            paddingBottom: 18,
            border: `${theme.accentFirst} solid 3px`,
        },

        '&:focus-visible': {
            outline: 'none',
            paddingTop: 19,
            paddingBottom: 18,
            border: `${theme.accentFirst} solid 3px`,
        },
    },

    searchButton: {
        outline: 0,
        border: 'none',
        height: '100%',
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 8,
        backgroundColor: theme.accentSecond,
        fontWeight: '500',
        fontSize: 24,
        lineHeight: '28px',
        color: theme.mainColor,
        boxShadow: `2px 0 0 ${theme.accentSecond}`,
        textAlign: 'center',
    },

    '@media (max-width: 1024px)': {
        /*for mobile tablets*/

        searchLarge: {
            display: 'none',
        },
    },
});

export const useFormDesktopStyles = createUseStyles(formDesktopStyles);

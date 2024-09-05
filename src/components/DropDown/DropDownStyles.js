import { createUseStyles } from 'react-jss';

import divBackground from './../../images/vector.svg';

export const dropDownStyles = (theme) => ({
    dropDown: {
        position: 'absolute',
        width: 192,
        top: '48px',
        right: 0,
        paddingBottom: 16,
        paddingTop: 16,
        paddingLeft: 50,
        backgroundColor: theme.mainColor,
        backgroundImage: `url(${divBackground})`,
        backgroundPosition: 16,
        backgroundRepeat: 'no-repeat',
        border: `1px solid ${theme.borderForm}`,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: '23px',
        zIndex: 31,
    },
});

export const useDropDownStyles = createUseStyles(dropDownStyles);

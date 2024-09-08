import React, { useCallback, useState } from 'react';

import { DropDown } from '../DropDown/DropDown';

import { useHeaderStyles } from './HeaderStyles';
import { useTheme } from 'react-jss';

export const Header = ({ handleThemeChange }) => {
    const [showDropDown, setShowDropDown] = useState(false);

    const theme = useTheme();
    const classes = useHeaderStyles(theme);

    const handleClick = useCallback(
        (event) => {
            event.preventDefault();
            setShowDropDown(!showDropDown);
        },
        [showDropDown]
    );

    return (
        <header className={classes.header}>
            <div className={classes.topSection}>
                <svg className={classes.headerLogo}>
                    <use href="#logo"></use>
                </svg>
                <nav className={classes.navigation}>
                    <ul className={classes.headerLists}>
                        <li className={classes.headerList}>
                            <a className={classes.headerLink} href="#stays">
                                Stays
                            </a>
                        </li>
                        <li className={classes.headerList}>
                            <a
                                className={classes.headerLink}
                                href="#attractions"
                            >
                                Attractions
                            </a>
                        </li>
                    </ul>
                    <ul className={classes.headerLists}>
                        <li onClick={handleThemeChange}>
                            <svg className={classes.headerButton}>
                                <use href="#night"></use>
                            </svg>
                        </li>
                        <li onClick={handleClick}>
                            <svg className={classes.headerAccount}>
                                <use href="#account"></use>
                            </svg>
                        </li>
                        <li className={classes.headerMenu}>
                            <svg className={classes.headerMenuButton}>
                                <use href="#menu"></use>
                            </svg>
                        </li>
                    </ul>
                </nav>
                {showDropDown && <DropDown />}
            </div>
        </header>
    );
};

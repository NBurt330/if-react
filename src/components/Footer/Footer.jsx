import React from 'react';

import { footerConfig } from '../../assets/constants/footerConfig';
import { useTheme } from 'react-jss';
import { useFooterStyles } from './Footer.Stlyles';

export const Footer = () => {
    const theme = useTheme();
    const classes = useFooterStyles(theme);

    return (
        <>
            <footer className={classes.footer}>
                <div className={classes.footerContainer}>
                    <svg className={classes.logo}>
                        <use href="#logo"></use>
                    </svg>
                    <div className={classes.top}>
                        {footerConfig.columns.map((column) => (
                            <div key={column.title} className={classes.column}>
                                <h3 className={classes.headlines}>
                                    {column.title}
                                </h3>
                                <ul className={classes.links}>
                                    {column.links.map((link) => (
                                        <li key={link.text}>
                                            <a
                                                className={classes.link}
                                                href={link.url}
                                            >
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={classes.copyright}>
                        &#169; 2022Triphouse, Inc. All rights reserved
                    </div>
                </div>
            </footer>
        </>
    );
};

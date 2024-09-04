import React from 'react';

import { footerConfig } from '../../assets/constants/footerConfig';

import './Footer.css';
export const Footer = ({ className }) => {
    return (
        <>
            <footer className={className}>
                <div className="container footer__container">
                    <svg className="footer__logo">
                        <use href="#logo"></use>
                    </svg>
                    <div className="footer__top">
                        {footerConfig.columns.map((column) => (
                            <div
                                key={column.title}
                                className="footer__column col-lg-4 col-md-4 col-sm-6"
                            >
                                <h3 className="footer__headlines">
                                    {column.title}
                                </h3>
                                <ul className="footer__links">
                                    {column.links.map((link) => (
                                        <li key={link.text}>
                                            <a
                                                className="footer__link"
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
                    <div className="footer__copyright">
                        &#169; 2022Triphouse, Inc. All rights reserved
                    </div>
                </div>
            </footer>
        </>
    );
};

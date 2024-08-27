import React from 'react';

import './Footer.css';
export const Footer = ({ className }) => (
    <footer className={className}>
        <div className="container footer__container">
            <svg className="footer__logo">
                <use href="#logo"></use>
            </svg>
            <div className="footer__top">
                <div className="footer__column col-lg-4 col-md-4 col-sm-6">
                    <h3 className="footer__headlines">About</h3>
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link" href="#how">
                                How Triphouse works
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#careers">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#privacy">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#terms">
                                Terms
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column col-lg-4 col-md-4 col-sm-6">
                    <h3 className="footer__headlines">Property types</h3>
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link" href="#guest_houses">
                                Guest houses
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#hotels">
                                Hotels
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#apartments">
                                Apartments
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#villas">
                                Villas
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#holiday_homes">
                                Holiday homes
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#hostels">
                                Hostels
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column col-lg-4 col-md-4 col-sm-6">
                    <h3 className="footer__headlines">Support</h3>
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link" href="#contacts">
                                Contact Customer Service
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="#FAQ">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                &#169; 2022Triphouse, Inc. All rights reserved
            </div>
        </div>
    </footer>
);

import React from 'react';
import './Header.css';

export const Header = () => (
    <header className="header">
        <div className="header__top">
            <svg className="header__logo">
                <use href="#logo"></use>
            </svg>
            <nav className="header__navigation">
                <ul className="header__lists">
                    <li className="header_list">
                        <a className="header__link" href="#stays">
                            Stays
                        </a>
                    </li>
                    <li className="header_list">
                        <a className="header__link" href="#attractions">
                            Attractions
                        </a>
                    </li>
                </ul>
                <ul className="header__lists">
                    <li>
                        <svg className="header__button">
                            <use href="#night"></use>
                        </svg>
                    </li>
                    <li>
                        <a href="#account">
                            <svg className="header__account">
                                <use href="#account"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="header__menu">
                        <svg className="header__menu-button">
                            <use href="#menu"></use>
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

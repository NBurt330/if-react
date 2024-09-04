import React from 'react';
import { NavLink } from 'react-router-dom';

import './SearchCards.css';

export const SearchCards = ({ className, arr }) => (
    <div className={className}>
        {arr.slice(0, 4).map((str) => {
            return (
                <NavLink
                    to={`/hotels/${str.id}`}
                    key={str.id}
                    target="_blank"
                    className="col-lg-3 col-md-4 col-sm-3 hotels__picture"
                >
                    <img
                        className="hotels__images"
                        src={str.imageUrl}
                        alt={str.name}
                    />
                    <div className="hotels__name">{str.name}</div>
                    <div className="hotels__location">
                        {str.city}, {str.country}
                    </div>
                </NavLink>
            );
        })}
    </div>
);

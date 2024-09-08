import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTheme } from 'react-jss';
import { useSearchCardsStyles } from './SearchCardsStyles';

export const SearchCards = ({ className, arr }) => {
    const theme = useTheme();
    const classes = useSearchCardsStyles(theme);

    return (
        <div className={className}>
            {arr.slice(0, 4).map((str) => {
                return (
                    <NavLink
                        to={`/hotels/${str.id}`}
                        key={str.id}
                        target="_blank"
                        className={classes.picture}
                    >
                        <img
                            className={classes.images}
                            src={str.imageUrl}
                            alt={str.name}
                        />
                        <div className={classes.name}>{str.name}</div>
                        <div className={classes.location}>
                            {str.city}, {str.country}
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
};

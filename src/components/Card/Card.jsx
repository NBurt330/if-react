import React from 'react';

import { useTheme } from 'react-jss';
import { useCardStyles } from './Card.Styles';

export const Card = ({ className, id, name, city, country, imageUrl }) => {
    const theme = useTheme();
    const classes = useCardStyles(theme);
    return (
        <div key={id} className={className}>
            <img className={classes.images} src={imageUrl} alt={name} />
            <div className={classes.name}>{name}</div>
            <div className={classes.location}>
                {city}, {country}
            </div>
        </div>
    );
};

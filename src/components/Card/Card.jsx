import React from 'react';
import classNames from 'classnames';

import './Card.css';

export const Card = ({ className, id, name, city, country, imageUrl }) => (
    <div
        key={id}
        className={classNames('col-lg-3 col-md-4 col-sm-3', className)}
    >
        <img className="images" src={imageUrl} alt={name} />
        <div className="name">{name}</div>
        <div className="location">
            {city}, {country}
        </div>
    </div>
);

import React from 'react';
import { Card } from '../Card/Card';

import './SearchCards.css';

export const SearchCards = ({ className, arr }) => (
    <div className={className}>
        {arr.slice(0, 4).map((str) => (
            <Card className="picture" key={str.id} {...str} />
        ))}
    </div>
);

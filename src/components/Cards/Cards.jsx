import React from 'react';
import './Cards.css';
import { numOfImagesOnSlide } from './config';
import { Card } from '../Card/Card';

export const Cards = ({ className, arr }) => (
    <div className={className}>
        {arr.slice(0, numOfImagesOnSlide).map((str) => (
            <Card className="picture" key={str.id} {...str} />
        ))}
    </div>
);

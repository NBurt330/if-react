import React, { useState, useEffect } from 'react';

import { Card } from '../Card/Card';
import { getHotels } from '../../services/functions';
import { numOfImagesOnSlide } from './config';

import { useCardsStyles } from './Cards.Styles';
export const Cards = ({ className }) => {
    const [arr, setArr] = useState([]);

    const classes = useCardsStyles();
    const fetchArr = () => {
        getHotels()
            .then((data) => {
                const results = data.slice(0, numOfImagesOnSlide);
                if (!results.length) {
                    throw new Error('No data');
                }
                setArr(results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        fetchArr();
    }, []);

    return (
        <div className={className}>
            {arr.map((str) => (
                <Card className={classes.picture} key={str.id} {...str} />
            ))}
        </div>
    );
};

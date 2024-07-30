import React from 'react';
import { Homes } from '../Homes/Homes';
import { Section } from '../Section/Section';

export const AvailableHotels = ({ title, arr }) => {
    if (!arr.length) {
        return <Section className="homes"></Section>;
    } else {
        return <Homes title={title} arr={arr} />;
    }
};

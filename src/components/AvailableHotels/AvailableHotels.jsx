import React from 'react';

import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { SearchCards } from '../SearchCards/SearchCards';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

export const AvailableHotels = ({ title }) => {
    const { hotels } = useAvailableHotelsContext();

    if (hotels.length === 0) {
        return <Section className="homes"></Section>;
    } else {
        return (
            <Section className="homes">
                <Container>
                    <Title className="homes__title">{title}</Title>
                    <SearchCards
                        className="homes__pictures"
                        arr={hotels}
                    ></SearchCards>
                </Container>
            </Section>
        );
    }
};

import React from 'react';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { SearchCards } from '../SearchCards/SearchCards';

export const AvailableHotels = ({ title, arr }) => {
    if (!arr.length) {
        return <Section className="homes"></Section>;
    } else {
        return (
            <Section className="homes">
                <Container>
                    <Title className="homes__title">{title}</Title>
                    <SearchCards
                        className="homes__pictures"
                        arr={arr}
                    ></SearchCards>
                </Container>
            </Section>
        );
    }
};

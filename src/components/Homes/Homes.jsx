import React from 'react';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { Cards } from '../Cards/Cards';

export const Homes = ({ title }) => (
    <Section className="homes">
        <Container>
            <Title className="homes__title">{title}</Title>
            <Cards className="homes__pictures"></Cards>
        </Container>
    </Section>
);

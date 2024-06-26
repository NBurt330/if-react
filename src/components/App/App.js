import React from 'react';

import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { Section } from '../Section/Section';
import { Cards } from '../Cards/Cards';
import { Card } from '../Card/Card';

import './App.css';

export const App = () => {
    return (
        <>
            <Section className="homes">
                <Container>
                    <Title className="homes__title">Homes guests loves</Title>
                    <Cards className="homes__pictures">
                        <Card className="picture"></Card>
                    </Cards>
                </Container>
            </Section>
        </>
    );
};

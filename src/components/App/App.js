import React from 'react';

import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import { Cards } from '../Cards/Cards';
import { data } from '../Cards/config';

import './App.css';

export const App = () => {
    return (
        <>
            <Section className="homes">
                <Container>
                    <Title className="homes__title">Homes guests loves</Title>
                    <Cards className="homes__pictures" arr={data}></Cards>
                </Container>
            </Section>
        </>
    );
};

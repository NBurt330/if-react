import React, { useEffect, useRef } from 'react';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';

export const NotFoundPage = () => {
    const resultRef = useRef(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <Section className="homes">
            <div ref={resultRef}></div>
            <Container>
                <Title className="homes__title">Results not found</Title>
            </Container>
        </Section>
    );
};

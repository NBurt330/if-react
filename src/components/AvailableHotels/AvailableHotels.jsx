import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { string } from 'prop-types';

import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { SearchCards } from '../SearchCards/SearchCards';
import { Loader } from '../Loader/Loader';

export const AvailableHotels = ({ title }) => {
    const hotels = useSelector((state) => state.hotels.hotels);
    const loading = useSelector((state) => state.hotels.loading);
    const error = useSelector((state) => state.hotels.error);

    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hotels]);

    if (loading) return <Loader />;
    if (error) return <p> Error: {error}</p>;

    if (hotels.length === 0) {
        return <Section className="hotels"></Section>;
    } else {
        return (
            <Section className="hotels">
                <div ref={scrollRef}></div>
                <Container>
                    <Title className="homes__title">{title}</Title>
                    <SearchCards
                        className="hotels__pictures"
                        arr={hotels}
                    ></SearchCards>
                </Container>
            </Section>
        );
    }
};

AvailableHotels.propTypes = {
    title: string,
};

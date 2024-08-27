import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';

import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { SearchCards } from '../SearchCards/SearchCards';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import { fetchData, wrapPromise } from '../../lib/wrapPromise';
import { apiHotelsUrl } from '../../services/constants';
import { filteredHotels } from '../../assets/function';

export const AvailableHotels = ({ title }) => {
    const scrollRef = useRef(null);
    const { cityName, showAvailable } = useAvailableHotelsContext();

    const hotels = filteredHotels(
        wrapPromise(fetchData(apiHotelsUrl)),
        cityName
    );

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hotels]);

    if (!showAvailable) {
        return <Section className="hotels"></Section>;
    } else {
        return (
            <Section className="hotels">
                <div ref={scrollRef}></div>
                <Container>
                    <Title className="homes__title">{title}</Title>
                    {hotels.length > 0 ? (
                        <SearchCards
                            className="hotels__pictures"
                            arr={hotels}
                        ></SearchCards>
                    ) : (
                        <p className="hotels__pictures"> No results found</p>
                    )}
                </Container>
            </Section>
        );
    }
};

AvailableHotels.propTypes = {
    title: string,
};

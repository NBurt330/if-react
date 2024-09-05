import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { string } from 'prop-types';

import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { SearchCards } from '../SearchCards/SearchCards';
import { Loader } from '../Loader/Loader';

import { useTheme } from 'react-jss';
import { useAvailableHotelsStyles } from './AvailableHotels.Styles';

export const AvailableHotels = ({ title }) => {
    const hotels = useSelector((state) => state.hotels.hotels);
    const loading = useSelector((state) => state.hotels.loading);
    const error = useSelector((state) => state.hotels.error);

    const scrollRef = useRef(null);

    const theme = useTheme();
    const classes = useAvailableHotelsStyles(theme);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hotels]);

    if (loading) return <Loader />;
    if (error) return <p> Error: {error}</p>;

    if (hotels.length === 0) {
        return <Section className={classes.hotels}></Section>;
    } else {
        return (
            <Section className={classes.hotels}>
                <div ref={scrollRef}></div>
                <Container>
                    <Title className={classes.hotelsTitle}>{title}</Title>
                    <SearchCards
                        className={classes.hotelsPictures}
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

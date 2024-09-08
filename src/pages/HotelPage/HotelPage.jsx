import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Container } from '../../components/Container/Container';
import { Title } from '../../components/Title/Title';
import { Sprite } from '../../components/Sprite/Sprite';
import { Footer } from '../../components/Footer/Footer';

import { apiHotelsUrl } from '../../services/constants';
import { Section } from '../../components/Section/Section';
import { useHotelPageStyles } from './HotelPageStyles';
import { useGlobalStyles } from '../../styles/GlobalStyles';
import { useTheme } from 'react-jss';

export const HotelPage = () => {
    const [hotel, setHotel] = useState([]);

    const { hotelId } = useParams();
    useGlobalStyles();

    const theme = useTheme();
    console.log(theme);
    const classes = useHotelPageStyles(theme);

    useEffect(() => {
        fetch(`${apiHotelsUrl}/${hotelId}`)
            .then((response) => response.json())
            .then((data) => {
                setHotel(data);
            });
    }, [hotelId]);

    return (
        <>
            <Sprite />
            <Section className={classes.root}>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Title className={classes.title}>{hotel.name} </Title>
                    <img
                        className={classes.images}
                        src={hotel.imageUrl}
                        alt={hotel.name}
                    />
                    <div className={classes.location}>
                        {hotel.city}, {hotel.country}
                    </div>
                </Container>
            </Section>
            <Footer className={classes.footer} />
        </>
    );
};

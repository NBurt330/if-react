import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './HotelPage.css';
import { Header } from '../../components/Header/Header';
import { Container } from '../../components/Container/Container';
import { Title } from '../../components/Title/Title';
import { Sprite } from '../../components/Sprite/Sprite';
import { Footer } from '../../components/Footer/Footer';

import { apiHotelsUrl } from '../../services/constants';
import { Section } from '../../components/Section/Section';

export const HotelPage = () => {
    const [hotel, setHotel] = useState([]);

    const { hotelId } = useParams();

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
            <Section className="hotel-page">
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Title className="hotel-page__title">{hotel.name} </Title>
                    <img
                        className="hotel-page__images"
                        src={hotel.imageUrl}
                        alt={hotel.name}
                    />
                    <div className="hotel-page__location">
                        {hotel.city}, {hotel.country}
                    </div>
                </Container>
            </Section>
            <Footer className="footer" />
        </>
    );
};

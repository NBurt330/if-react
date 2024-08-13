import React, { useState } from 'react';

import { Container } from '../Container/Container';
import { Sprite } from '../Sprite/Sprite';
import { Wrapper } from '../Wrapper/Wrapper';
import { Header } from '../Header/Header';
import { TopDiscover } from '../TopDiscover/TopDiscover';
import { FormDesktop } from '../FormDesktop/FormDesktop';
import { FormGuestsFilter } from '../FormGuestsFilter/FormGuestsFilter';
import { TopApps } from '../TopApps/TopApps';
import { FormMobile } from '../FormMobile/FormMobile';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes/Homes';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { getAvailableHotels } from '../../services/functions';

import { numOfImagesOnSlide } from '../Cards/config';

import './App.css';

export const App = () => {
    const [inputCity, setInputCity] = useState('');
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        event.preventDefault();
        setInputCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getAvailableHotels(inputCity)
            .then((data) => {
                const results = data.slice(0, numOfImagesOnSlide);
                if (!results.length) {
                    throw new Error('No data');
                }
                setHotels(results);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            });
        setInputCity('');
    };

    return (
        <>
            <Sprite />
            <Wrapper className="top">
                <Container>
                    <Header />
                </Container>
                <Container className="top-container">
                    <TopDiscover className="top-discover" />
                    <Wrapper className="top-search_form">
                        <FormDesktop
                            className="top-search top-search--large"
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            inputCity={inputCity}
                        />
                        <FormGuestsFilter className="disabled" />
                        <FormMobile />
                    </Wrapper>
                    <TopApps />
                </Container>
            </Wrapper>
            {error === null ? (
                <AvailableHotels title="Available hotels" arr={hotels} />
            ) : (
                <NotFoundPage />
            )}
            <Homes title="Homes guests loves" />
        </>
    );
};

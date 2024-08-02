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
import { filteredHotels } from '../../assets/function';
import { data } from '../Cards/config';

import './App.css';

export const App = () => {
    const [inputCity, setInputCity] = useState('');
    const [hotels, setHotels] = useState([]);
    const handleChange = (event) => {
        event.preventDefault();
        setInputCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setHotels(filteredHotels(data, inputCity));
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
            <AvailableHotels title="Available hotels" arr={hotels} />
            <Homes title="Homes guests loves" arr={data} />
        </>
    );
};

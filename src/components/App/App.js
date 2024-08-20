import React from 'react';

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

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import './App.css';

export const App = () => {
    const { error } = useAvailableHotelsContext();

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
                        <FormDesktop className="top-search top-search--large" />
                        <FormGuestsFilter className="disabled" />
                        <FormMobile />
                    </Wrapper>
                    <TopApps />
                </Container>
            </Wrapper>
            {error === false ? (
                <AvailableHotels title="Available hotels" />
            ) : (
                <NotFoundPage />
            )}
            <Homes title="Homes guests loves" />
        </>
    );
};

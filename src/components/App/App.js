import React, { Suspense } from 'react';

import { Container } from '../Container/Container';
import { Sprite } from '../Sprite/Sprite';
import { Wrapper } from '../Wrapper/Wrapper';
import { Header } from '../Header/Header';
import { TopDiscover } from '../TopDiscover/TopDiscover';
import { FormDesktop } from '../FormDesktop/FormDesktop';
import { TopApps } from '../TopApps/TopApps';
import { FormMobile } from '../FormMobile/FormMobile';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes/Homes';
import { Loader } from '../Loader/Loader';

import { FormContextProvider } from '../../contexts/Form.context';
import { AvailableHotelsContextProvider } from '../../contexts/AvailableHotels.context';
import './App.css';

export const App = () => {
    return (
        <>
            <Sprite />
            <AvailableHotelsContextProvider>
                <Wrapper className="top">
                    <Container>
                        <Header />
                    </Container>
                    <Container className="top-container">
                        <TopDiscover className="top-discover" />
                        <Wrapper className="top-search_form">
                            <FormContextProvider>
                                <FormDesktop className="top-search top-search--large" />
                                <FormMobile />
                            </FormContextProvider>
                        </Wrapper>
                        <TopApps />
                    </Container>
                </Wrapper>
                <Suspense fallback={<Loader />}>
                    <AvailableHotels title="Available hotels" />
                </Suspense>
            </AvailableHotelsContextProvider>
            <Homes title="Homes guests loves" />
        </>
    );
};

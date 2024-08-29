import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import { Footer } from '../Footer/Footer';

import { FormContextProvider } from '../../contexts/Form.context';

import { PATH } from '../../assets/constants/constants';
import { authStatuses } from '../../assets/constants/authStatuses';

import './App.css';

export const App = () => {
    const loggedOut = useSelector(
        (state) => state.auth.status !== authStatuses.loggedIn
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (loggedOut) {
            navigate(PATH.login);
        }
    }, [loggedOut]);

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
                        <FormContextProvider>
                            <FormDesktop className="top-search top-search--large" />
                            <FormMobile />
                        </FormContextProvider>
                    </Wrapper>
                    <TopApps />
                </Container>
            </Wrapper>
            <AvailableHotels title="Available hotels" />
            <Homes title="Homes guests loves" />
            <Footer className="footer" />
        </>
    );
};

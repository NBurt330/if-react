import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'react-jss';

import { Container } from '../Container/Container';
import { Sprite } from '../Sprite/Sprite';
import { Wrapper } from '../Wrapper/Wrapper';
import { Header } from '../Header/Header';
import { TopDiscover } from '../TopDiscover/TopDiscover';
import { FormDesktop } from '../FormDesktop/FormDesktop';
import { TopApps } from '../TopApps/TopApps';
import { AvailableHotels } from '../AvailableHotels/AvailableHotels';
import { Homes } from '../Homes/Homes';
import { Footer } from '../Footer/Footer';

import { FormContextProvider } from '../../contexts/Form.context';

import { PATH } from '../../assets/constants/constants';
import { authStatuses } from '../../assets/constants/authStatuses';
import { darkTheme } from '../../styles/darkTheme';
import { lightTheme } from '../../styles/lightTheme';
import backgroundImgLight from './../../images/castelmezzano_light.jpeg';
import backgroundImgDark from './../../images/castelmezzano.jpg';

import { useAppStyles } from './App.Styles';
import { useGlobalStyles } from '../../styles/GlobalStyles';

export const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const theme = darkMode ? darkTheme : lightTheme;

    useGlobalStyles();

    const classes = useAppStyles(theme);

    const backgroundImg = darkMode ? backgroundImgLight : backgroundImgDark;

    const loggedOut = useSelector(
        (state) => state.auth.status !== authStatuses.loggedIn
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (loggedOut) {
            navigate(PATH.login);
        }
    }, [loggedOut]);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Sprite />
                <Wrapper
                    className={classes.top}
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                >
                    <Container>
                        <Header handleThemeChange={handleThemeChange} />
                    </Container>
                    <Container className={classes.topContainer}>
                        <TopDiscover />
                        <FormContextProvider>
                            <Wrapper className={classes.topSearchForm}>
                                <FormDesktop />
                            </Wrapper>
                        </FormContextProvider>
                        <TopApps />
                    </Container>
                </Wrapper>
                <AvailableHotels title="Available hotels" />
                <Homes title="Homes guests loves" />
                <Footer />
            </ThemeProvider>
        </>
    );
};

import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'react-jss';

import { Sprite } from '../Sprite/Sprite';

import { persistor, store } from '../../store';
import { darkTheme } from '../../styles/darkTheme';
import { lightTheme } from '../../styles/lightTheme';

export const SystemLayout = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <>
            <ScrollRestoration />
            <Sprite />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <Outlet />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </>
    );
};

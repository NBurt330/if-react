import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Sprite } from '../Sprite/Sprite';
import { persistor, store } from '../../store';

export const SystemLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Sprite />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Outlet />
                </PersistGate>
            </Provider>
        </>
    );
};

import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Sprite } from '../Sprite/Sprite';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const SystemLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Sprite />
            <Provider store={store}>
                <Outlet />
            </Provider>
        </>
    );
};

import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Sprite } from '../Sprite/Sprite';
import { AuthContextProvider } from '../../contexts/Auth.context';

export const SystemLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Sprite />
            <AuthContextProvider>
                <Outlet />
            </AuthContextProvider>
        </>
    );
};

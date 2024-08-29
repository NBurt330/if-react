import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
    const error = useRouteError();
    let message = 'Something went wrong';

    if (error.message === '204') {
        message = 'No data to display';
    }

    if (error.message === '404') {
        message = '404. Page not found';
    }

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
};

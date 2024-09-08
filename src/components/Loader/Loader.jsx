import React from 'react';
import { useLoaderStyles } from './LoaderStyles';

export const Loader = () => {
    const classes = useLoaderStyles();
    return <div className={classes.spinner}></div>;
};

import React from 'react';

import classNames from 'classnames';

import { useContainerStyles } from './Container.Styles';
export const Container = ({ className, children }) => {
    const classes = useContainerStyles();
    return (
        <div className={classNames(classes.container, className)}>
            {children}
        </div>
    );
};

import React from 'react';
import classNames from 'classnames';
import { useTitleStyles } from './TitleStyles';

export const Title = ({ className, children }) => {
    const classes = useTitleStyles();
    return <h2 className={classNames(classes.title, className)}>{children}</h2>;
};

import React from 'react';
import classNames from 'classnames';
import './Title.css';

export const Title = ({ className, children }) => (
    <h2 className={classNames('title', className)}>{children}</h2>
);

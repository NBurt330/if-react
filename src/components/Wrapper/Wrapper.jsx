import React from 'react';
import './Wrapper.css';

export const Wrapper = ({ className, children }) => (
    <div className={className}>{children}</div>
);

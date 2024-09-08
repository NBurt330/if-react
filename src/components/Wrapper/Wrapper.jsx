import React from 'react';

export const Wrapper = ({ className, children, style }) => (
    <div className={className} style={style}>
        {children}
    </div>
);

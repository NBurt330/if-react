import React from 'react';

import './Section.css';

export const Section = ({ className, children }) => (
    <section className={className}>{children}</section>
);

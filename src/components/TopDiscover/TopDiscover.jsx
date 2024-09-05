import React from 'react';

import { useTopDiscoverStyles } from './TopDiscoverStyles';
import { useTheme } from 'react-jss';

export const TopDiscover = () => {
    const theme = useTheme();
    const classes = useTopDiscoverStyles(theme);

    return (
        <div className={classes.topDiscover}>
            <p>Discover stays</p>
            <p>to live, work or just relax</p>
        </div>
    );
};

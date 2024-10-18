import React from 'react';
import { useTopAppsStyles } from './TopAppsStyles';

export const TopApps = () => {
    const classes = useTopAppsStyles();
    return (
        <div className={classes.apps}>
            <div>
                <svg className={classes.googlePlay}>
                    <use href="#google-play-badge"></use>
                </svg>
            </div>
            <svg className={classes.appleStore}>
                {' '}
                <use href="#apple-store-badge"></use>
            </svg>
        </div>
    );
};

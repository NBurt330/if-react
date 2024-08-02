import React from 'react';
import './TopApps.css';

export const TopApps = () => (
    <div className="top-apps">
        <div>
            <svg className="top-apps__google-play">
                <use href="#google-play-badge"></use>
            </svg>
        </div>
        <svg className="top-apps__apple-store">
            <use href="#apple-store-badge"></use>
        </svg>
    </div>
);

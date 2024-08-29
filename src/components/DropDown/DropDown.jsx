import React from 'react';

import './DropDown.css';
import { useAuthContext } from '../../contexts/Auth.context';

export const DropDown = () => {
    const { logOut } = useAuthContext();
    const handleClick = (event) => {
        event.preventDefault();
        logOut();
    };

    return (
        <div className="dropdown" onClick={handleClick}>
            Sign Out
        </div>
    );
};

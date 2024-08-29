import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setAuthStatus } from '../../store/actions/auth.actions';
import { PATH } from '../../assets/constants/constants';
import './DropDown.css';
import { authStatuses as AUTH_STATUSES } from '../../assets/constants/authStatuses';

export const DropDown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(setAuthStatus(AUTH_STATUSES.loggedOut));
        navigate(PATH.login);
    };

    return (
        <div className="dropdown" onClick={handleClick}>
            Sign Out
        </div>
    );
};

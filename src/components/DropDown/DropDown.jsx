import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../assets/constants/constants';
import { setStatus } from '../../store/slice/auth.slice';
import { authStatuses as AUTH_STATUSES } from '../../assets/constants/authStatuses';

import './DropDown.css';

export const DropDown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(setStatus(AUTH_STATUSES.loggedOut));
        navigate(PATH.login);
    };

    return (
        <div className="dropdown" onClick={handleClick}>
            Sign Out
        </div>
    );
};

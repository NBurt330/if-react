import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../assets/constants';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState({
        email: null,
        password: null,
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = {
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
        };
        if (savedUser.email === null && savedUser.password === null) {
            alert('You need to log in to continue');
            navigate(PATH.login);
        } else {
            setIsLoggedIn(true);
            navigate(PATH.index);
        }
    }, []);

    const logIn = (userEmail, userPassword) => {
        localStorage.setItem('email', userEmail);
        localStorage.setItem('password', userPassword);
        setLoggedUser({ email: userEmail, password: userPassword });
        setIsLoggedIn(true);
        navigate(PATH.index);
    };

    const logOut = () => {
        setShowDropDown(false);
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate(PATH.login);
    };

    return (
        <AuthContext.Provider
            value={{
                loggedUser,
                setLoggedUser,
                isLoggedIn,
                setIsLoggedIn,
                logIn,
                logOut,
                showDropDown,
                setShowDropDown,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

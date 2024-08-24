import React, { createContext, useContext, useState } from 'react';

const AvailableHotelsContext = createContext();

export const useAvailableHotelsContext = () => {
    return useContext(AvailableHotelsContext);
};

export const AvailableHotelsContextProvider = ({ children }) => {
    const [showAvailable, setShowAvailable] = useState(false);
    const [cityName, setCityName] = useState('');

    return (
        <AvailableHotelsContext.Provider
            value={{ showAvailable, setShowAvailable, cityName, setCityName }}
        >
            {children}
        </AvailableHotelsContext.Provider>
    );
};

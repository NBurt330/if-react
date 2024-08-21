import React, { createContext, useContext, useState } from 'react';

const AvailableHotelsContext = createContext();

export const useAvailableHotelsContext = () => {
    return useContext(AvailableHotelsContext);
};

export const AvailableHotelsContextProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(false);

    return (
        <AvailableHotelsContext.Provider
            value={{ hotels, setHotels, error, setError }}
        >
            {children}
        </AvailableHotelsContext.Provider>
    );
};

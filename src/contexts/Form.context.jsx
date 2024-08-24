import React, { createContext, useContext, useState } from 'react';
import { minAdults, minChildren, minRooms } from '../assets/constants';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormContextProvider = ({ children }) => {
    const [inputCity, setInputCity] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);
    const [adults, setAdults] = useState(minAdults);
    const [childrenCount, setChildrenCount] = useState(minChildren);
    const [rooms, setRooms] = useState(minRooms);
    const [childAge, setChildAge] = useState(Array(minChildren).fill(''));

    return (
        <FormContext.Provider
            value={{
                inputCity,
                setInputCity,
                dateRange,
                setDateRange,
                adults,
                setAdults,
                childrenCount,
                setChildrenCount,
                rooms,
                setRooms,
                childAge,
                setChildAge,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

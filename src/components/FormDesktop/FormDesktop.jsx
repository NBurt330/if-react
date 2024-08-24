import React, { useState } from 'react';

import { Calendar } from '../Calendar/Calendar';
import { FormGuestsFilter } from '../FormGuestsFilter/FormGuestsFilter';

import { useFormContext } from '../../contexts/Form.context';
import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';

import './FormDesktop.css';

export const FormDesktop = ({ className }) => {
    const [showFormGuestFilter, setShowFormGuestFilter] = useState(false);

    const {
        inputCity,
        setInputCity,
        setDateRange,
        dateRange,
        adults,
        rooms,
        childrenCount,
    } = useFormContext();

    const { setShowAvailable, setCityName } = useAvailableHotelsContext();

    const handleChange = (event) => {
        event.preventDefault();
        setInputCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAvailable(true);
        setCityName(inputCity);
        setInputCity('');
    };

    const handleFormGuestFilter = (event) => {
        event.preventDefault();
        setShowFormGuestFilter(!showFormGuestFilter);
    };

    return (
        <>
            <form className={className} onSubmit={handleSubmit}>
                <div className="top-search__column top-search__column--city">
                    <input
                        type="text"
                        id="city"
                        value={inputCity}
                        placeholder="New York"
                        className="top-search__field top-search__field--city"
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="city"
                        className="top-search__label top-search__label--city"
                    >
                        Your destination or hotel name
                    </label>
                </div>
                <Calendar
                    className="top-search__column--data"
                    setDateRange={setDateRange}
                    dateRange={dateRange}
                />
                <div className="top-search__column top-search__column--guests">
                    <input
                        type="text"
                        id="people"
                        value={`${adults} Adults — ${childrenCount} Children — ${rooms} Room`}
                        className="top-search__field top-search__field--guests"
                        onClick={handleFormGuestFilter}
                    />
                </div>

                <div className="top-search__column top-search__column--button col-md-12 col-sm-6">
                    <button className="top-search__button">Search</button>
                </div>
            </form>
            {showFormGuestFilter && (
                <FormGuestsFilter className="top-search__guests-filter" />
            )}
        </>
    );
};

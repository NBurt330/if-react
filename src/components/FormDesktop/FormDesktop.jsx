import React, { useState } from 'react';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';
import { getAvailableHotels } from '../../services/functions';
import { Calendar } from '../Calendar/Calendar';
import { numOfImagesOnSlide } from '../Cards/config';

import './FormDesktop.css';

export const FormDesktop = ({ className }) => {
    const [inputCity, setInputCity] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);
    const { setHotels, setError } = useAvailableHotelsContext();

    const handleChange = (event) => {
        event.preventDefault();
        setInputCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getAvailableHotels(inputCity)
            .then((data) => {
                const results = data.slice(0, numOfImagesOnSlide);
                console.log(results);
                if (!results.length) {
                    throw new Error('No data');
                }
                setHotels(results);
                setError(false);
            })
            .catch(() => {
                setError(true);
            });
        setInputCity('');
    };

    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="top-search__column top-search__column--city">
                <input
                    type="text"
                    id="city"
                    placeholder="New York"
                    value={inputCity}
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
                    value="1 Adults — 0 Children — 1 Room"
                    className="top-search__field top-search__field--guests"
                />
            </div>

            <div className="top-search__column top-search__column--button col-md-12 col-sm-6">
                <button className="top-search__button">Search</button>
            </div>
        </form>
    );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Calendar } from '../Calendar/Calendar';
import { FormGuestsFilter } from '../FormGuestsFilter/FormGuestsFilter';

import { searchHotels } from '../../store/slice/search.slice';

import { useFormContext } from '../../contexts/Form.context';

import './FormDesktop.css';
import { apiHotelsUrl } from '../../services/constants';

export const FormDesktop = ({ className }) => {
    const [showFormGuestFilter, setShowFormGuestFilter] = useState(false);
    const [cityInput, setCityInput] = useState('');

    const {
        inputCity,
        setInputCity,
        setDateRange,
        dateRange,
        adults,
        rooms,
        childrenCount,
        childrenAge,
    } = useFormContext();

    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        if (event.target.name === 'city') {
            setInputCity(event.target.value);
            setCityInput(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const [startDate, endDate] = dateRange;

        let startDateMc;
        let endDateMc;
        let childrenAgeString;

        if (startDate !== null) {
            startDateMc = startDate.getTime();
        }

        if (endDate !== null) {
            endDateMc = endDate.getTime();
        }

        if (childrenAge) {
            childrenAgeString = childrenAge.split().join(',');
        }

        const searchUrlHotels = (url) => {
            const paramsUrl = new URL(url);
            paramsUrl.searchParams.set('search', cityInput);
            paramsUrl.searchParams.set('dateFrom', startDateMc);
            paramsUrl.searchParams.set('dateTo', endDateMc);
            paramsUrl.searchParams.set('adults', adults.toString());
            paramsUrl.searchParams.set('children', childrenAgeString);
            paramsUrl.searchParams.set('rooms', rooms.toString());
            return paramsUrl;
        };

        dispatch(searchHotels(searchUrlHotels(apiHotelsUrl)));
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
                        name="city"
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
                    name="calendar"
                    setDateRange={setDateRange}
                    dateRange={dateRange}
                />
                <div className="top-search__column top-search__column--guests">
                    <input
                        type="text"
                        id="people"
                        name="people"
                        value={`${adults} Adults — ${childrenCount} Children — ${rooms} Room`}
                        className="top-search__field top-search__field--guests"
                        onClick={handleFormGuestFilter}
                        onChange={handleChange}
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Calendar } from '../Calendar/Calendar';
import { FormGuestsFilter } from '../FormGuestsFilter/FormGuestsFilter';

import { searchHotels } from '../../store/actions';

import { useFormContext } from '../../contexts/Form.context';

import './FormDesktop.css';
import { apiHotelsUrl } from '../../services/constants';

export const FormDesktop = ({ className }) => {
    const [showFormGuestFilter, setShowFormGuestFilter] = useState(false);
    const [query, setQuery] = useState('');

    const {
        inputCity,
        setInputCity,
        setDateRange,
        dateRange,
        adults,
        rooms,
        childrenCount,
    } = useFormContext();

    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setInputCity(event.target.value);
        setQuery(event.target.value);
    };

    const searchUrlHotels = (url) => {
        const paramUrl = new URL(url);
        paramUrl.searchParams.set('search', query);
        //   url.searchParams.set('adults', `${adultsInputEL.value}`);
        //    url.searchParams.set('children', searchChildrenParamsString());
        //   url.searchParams.set('rooms', `${roomsInputEL.value}`);
        return paramUrl;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(inputCity);
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

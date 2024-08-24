import React, { useState } from 'react';

import { useAvailableHotelsContext } from '../../contexts/AvailableHotels.context';
import { getAvailableHotels } from '../../services/functions';
import { Calendar } from '../Calendar/Calendar';
import { FormGuestsFilter } from '../FormGuestsFilter/FormGuestsFilter';
import { numOfImagesOnSlide } from '../Cards/config';
import {
    minAdults,
    minChildren,
    minRooms,
    maxAdults,
    maxChildren,
    maxRooms,
} from '../../assets/constants';

import './FormDesktop.css';


export const FormDesktop = ({ className }) => {
    const [inputCity, setInputCity] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);

    const [adults, setAdults] = useState(minAdults);
    const [childrenCount, setChildrenCount] = useState(minChildren);
    const [rooms, setRooms] = useState(minRooms);
    const [childAge, setChildAge] = useState(Array(minChildren).fill(''));
    const [showFormGuestFilter, setShowFormGuestFilter] = useState(false);

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

    const handleFormGuestFilter = (event) => {
        event.preventDefault();
        setShowFormGuestFilter(!showFormGuestFilter);
    };

    const incrementValues = (event) => {
        if (event.target.id === 'btn-plus-adults') {
            setAdults((prev) => Math.min(prev + 1, maxAdults));
        }
        if (event.target.id === 'btn-plus-children') {
            setChildrenCount((prev) => Math.min(prev + 1, maxChildren));
        }
        if (event.target.id === 'btn-plus-rooms') {
            setRooms((prev) => Math.min(prev + 1, maxRooms));
        }
    };
    const decrementValues = (event) => {
        if (event.target.id === 'btn-minus-adults') {
            setAdults((prev) => Math.max(prev - 1, minAdults));
        }
        if (event.target.id === 'btn-minus-children') {
            setChildrenCount((prev) => Math.max(prev - 1, minChildren));
        }
        if (event.target.id === 'btn-minus-rooms') {
            setRooms((prev) => Math.max(prev - 1, minRooms));
        }
    };

    const handleChildAge = (index, age) => {
        const newChildAge = [...childAge];
        newChildAge[index] = age;
        setChildAge(newChildAge);
    };

    return (
        <>
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
                <FormGuestsFilter
                    className="top-search__guests-filter"
                    adults={adults}
                    childrenCount={childrenCount}
                    rooms={rooms}
                    childAge={childAge}
                    incrementValues={incrementValues}
                    decrementValues={decrementValues}
                    handleChildAge={handleChildAge}
                />
            )}
        </>
    );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Calendar } from '../Calendar/Calendar';
import { FormGuestsFilter } from '../FormGuestsFilter/FormGuestsFilter';

import { searchHotels } from '../../store/slice/search.slice';

import { useFormContext } from '../../contexts/Form.context';

import { apiHotelsUrl } from '../../services/constants';

import { useTheme } from 'react-jss';
import { useFormDesktopStyles } from './FormDesktop.Styles';

export const FormDesktop = () => {
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

    const theme = useTheme();
    const classes = useFormDesktopStyles(theme);

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
            <div className={classes.topSearchForm}>
                <form className={classes.topSearch} onSubmit={handleSubmit}>
                    <div
                        className={`${classes.searchColumn} ${classes.searchColumnCity}`}
                    >
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={inputCity}
                            placeholder="New York"
                            className={`${classes.searchField} ${classes.searchFieldCity}`}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="city"
                            className={`${classes.searchLabel} ${classes.searchLabelCity}`}
                        >
                            Your destination or hotel name
                        </label>
                    </div>
                    <Calendar
                        name="calendar"
                        setDateRange={setDateRange}
                        dateRange={dateRange}
                    />
                    <div
                        className={`${classes.searchColumn} ${classes.searchColumnGests}`}
                    >
                        <input
                            type="text"
                            id="people"
                            name="people"
                            value={`${adults} Adults — ${childrenCount} Children — ${rooms} Room`}
                            className={`${classes.searchField} ${classes.searchFieldGuests}`}
                            onClick={handleFormGuestFilter}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        className={`${classes.searchColumn} ${classes.columnButton} ${classes.colMd12} ${classes.colSm6}`}
                    >
                        <button className={classes.searchButton}>Search</button>
                    </div>
                </form>
                {showFormGuestFilter && (
                    <FormGuestsFilter className={classes.searchGuestsFilter} />
                )}
            </div>
        </>
    );
};

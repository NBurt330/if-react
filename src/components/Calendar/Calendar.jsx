import React, { memo } from 'react';
import { array, string, func } from 'prop-types';

import DatePicker from 'react-datepicker';
import classNames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

import './../FormDesktop/FormDesktop.Styles';
import { useFormDesktopStyles } from '../FormDesktop/FormDesktop.Styles';

// eslint-disable-next-line react/display-name
export const Calendar = memo(({ dateRange, setDateRange }) => {
    const [startDate, endDate] = dateRange;

    const handleChange = (update) => {
        setDateRange(update);
    };

    const classes = useFormDesktopStyles();

    return (
        <div className={classNames(classes.column, classes.searchColumnData)}>
            <DatePicker
                className={`${classes.searchField} ${classes.searchFieldData}`}
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                monthsShown={2}
                onChange={handleChange}
                isClearable={true}
                id="calendar"
                placeholderText="Tue 15 Sept — Sat 19 Sept"
            />
            <label
                htmlFor="calendar"
                className={`${classes.searchLabel} ${classes.searchLabelData}`}
            >
                Check-in — Check-out
            </label>
        </div>
    );
});

Calendar.propTypes = {
    className: string,
    dateRange: array,
    setDateRange: func,
};

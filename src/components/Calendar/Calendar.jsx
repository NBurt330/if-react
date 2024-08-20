import React from 'react';

import DatePicker from 'react-datepicker';
import classNames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

export const Calendar = ({ className, dateRange, setDateRange }) => {
    const [startDate, endDate] = dateRange;

    const handleChange = (update) => {
        setDateRange(update);
    };

    return (
        <div className={classNames('top-search__column', className)}>
            <DatePicker
                className="top-search__field top-search__field--data"
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
                className="top-search__label top-search__label--data"
            >
                Check-in — Check-out
            </label>
        </div>
    );
};
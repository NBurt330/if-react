import React from 'react';
import './FormDesktop.css';

export const FormDesktop = ({ className, onChange, onSubmit, inputCity }) => (
    <form className={className} onSubmit={onSubmit}>
        <div className="top-search__column top-search__column--city">
            <input
                type="text"
                id="city"
                placeholder="New York"
                value={inputCity}
                className="top-search__field top-search__field--city"
                onChange={onChange}
            />
            <label
                htmlFor="city"
                className="top-search__label top-search__label--city"
            >
                Your destination or hotel name
            </label>
        </div>
        <div className="top-search__column top-search__column--data">
            <input
                type="text"
                id="calendar"
                placeholder="Tue 15 Sept — Sat 19 Sept"
                className="top-search__field top-search__field--data"
            />
            <label
                htmlFor="calendar"
                className="top-search__label top-search__label--data"
            >
                Check-in - Check-out
            </label>
        </div>

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

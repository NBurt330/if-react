import React from 'react';

import classNames from 'classnames';

import './FormGuestsFilter.css';
export const FormGuestsFilter = ({ className }) => (
    <div className={classNames('top-search__guests-filter', className)}>
        <form className="top-search__guest-filter">
            <label htmlFor="adults-lg" className="top-search__label-filter">
                Adults
            </label>
            <input
                type="button"
                value="&ndash;"
                className="btn-minus btn-disabled"
                data-for="adults-lg"
                disabled
            />
            <input
                type="text"
                value="1"
                min="1"
                max="30"
                id="adults-lg"
                className="top-search__guest-input"
            />
            <input
                type="button"
                value="+"
                className="btn-plus"
                data-for="adults-lg"
            />
        </form>
        <form className="top-search__guest-filter">
            <label htmlFor="children-lg" className="top-search__label-filter">
                Children
            </label>
            <input
                type="button"
                value="&ndash;"
                className="btn-minus btn-disabled"
                data-for="children-lg"
                disabled
            />
            <input
                type="text"
                value="0"
                min="0"
                max="10"
                id="children-lg"
                className="top-search__guest-input"
            />
            <input
                type="button"
                value="+"
                className="btn-plus"
                data-for="children-lg"
            />
        </form>
        <form className="top-search__guest-filter">
            <label htmlFor="rooms-lg" className="top-search__label-filter">
                Rooms
            </label>
            <input
                type="button"
                value="&ndash;"
                className="btn-minus btn-disabled"
                data-for="rooms-lg"
                disabled
            />
            <input
                type="text"
                value="1"
                min="1"
                max="30"
                id="rooms-lg"
                className="top-search__guest-input"
            />
            <input
                type="button"
                value="+"
                className="btn-plus"
                data-for="rooms-lg"
            />
        </form>
        <div className="top-search__guest-filter">
            <div className="top-search__children disabled">
                <h3 className="top-search__children-label">
                    What is the age of the child you’re travelling with?
                </h3>
                <div className="top-search__children-wrapper">
                    <select
                        name="children-lg-age"
                        className="top-search__children-option"
                    >
                        <option value="0">0 year old</option>
                        <option value="1">1 year old</option>
                        <option value="2">2 years old</option>
                        <option value="3">3 years old</option>
                        <option value="4">4 years old</option>
                        <option value="5">5 years old</option>
                        <option value="6">6 years old</option>
                        <option value="7">7 years old</option>
                        <option value="8">8 years old</option>
                        <option value="9">9 years old</option>
                        <option value="10">10 years old</option>
                        <option value="11">11 years old</option>
                        <option value="12">12 years old</option>
                        <option value="13">13 years old</option>
                        <option value="14">14 years old</option>
                        <option value="15">15 years old</option>
                        <option value="16">16 years old</option>
                        <option value="17">17 years old</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
);

import React from 'react';
import './FormMobile.css';

export const FormMobile = () => (
    <form className="top-search top-search--small">
        <div className="top-search__column col-md-12 col-sm-6">
            <input
                type="text"
                placeholder="Your destination or hotel name"
                className="top-search__field top-search__field--city"
            />
        </div>
        <div className="col-md-12 col-sm-6 top-search__column--small">
            <div className="top-search__column top-search__column--data">
                <label
                    htmlFor="check-in"
                    className="top-search__label top-search__label--data1"
                >
                    Check-in date
                </label>
                <input
                    type="text"
                    id="check-in"
                    placeholder="Tue 15 Sept 2020"
                    className="top-search__field top-search__field--data1"
                />
            </div>
            <div className="top-search__column top-search__column--data">
                <label
                    htmlFor="check-out"
                    className="top-search__label top-search__label--data2"
                >
                    Check-out date
                </label>
                <input
                    type="text"
                    id="check-out"
                    placeholder="Sat 19 Sept 2020"
                    className="top-search__field top-search__field--data2"
                />
            </div>
        </div>
        <div className="top-search__column--small-nogap col-md-12 col-sm-6">
            <div className="top-search__column top-search__column--guests">
                <label
                    htmlFor="adults"
                    className="top-search__label top-search__label--guests1"
                >
                    Adults
                </label>
                <input
                    type="text"
                    id="adults"
                    placeholder="2"
                    className="top-search__field top-search__field--guests1"
                />
            </div>
            <div className="top-search__column top-search__column--guests">
                <label htmlFor="children" className="top-search__label">
                    Children
                </label>
                <input
                    type="text"
                    id="children"
                    placeholder="0"
                    className="top-search__field"
                />
            </div>
            <div className="top-search__column top-search__column--guests">
                <label
                    htmlFor="rooms"
                    className="top-search__label top-search__label--guests3"
                >
                    Rooms
                </label>
                <input
                    type="text"
                    id="rooms"
                    placeholder="1"
                    className="top-search__field top-search__field--guests3"
                />
            </div>
        </div>
        <div className="top-search__column top-search__column--button col-md-12 col-sm-6">
            <button className="top-search__button">Search</button>
        </div>
    </form>
);

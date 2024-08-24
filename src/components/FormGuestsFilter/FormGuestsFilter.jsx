import React, { useMemo, memo } from 'react';

import classNames from 'classnames';
import {
    minAdults,
    minChildren,
    minRooms,
    maxAdults,
    maxChildren,
    maxRooms,
} from '../../assets/constants';

import './FormGuestsFilter.css';
import { useFormContext } from '../../contexts/Form.context';

// eslint-disable-next-line react/display-name
export const FormGuestsFilter = memo(({ className }) => {
    const {
        childAge,
        adults,
        rooms,
        childrenCount,
        setAdults,
        setChildrenCount,
        setRooms,
        setChildAge,
    } = useFormContext();
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

    const formChildrenAge = useMemo(() => {
        return (
            <div className="top-search__guest-filter">
                <div className="top-search__children disabled">
                    <h3 className="top-search__children-label">
                        What is the age of the child you’re travelling with?
                    </h3>
                    <div className="top-search__children-wrapper">
                        {Array.from({ length: childrenCount }, (_, index) => (
                            <select
                                key={index}
                                name="children-lg-age"
                                value={childAge[index]}
                                className="top-search__children-option"
                                onChange={(e) =>
                                    handleChildAge(index, e.target.value)
                                }
                            >
                                {Array.from({ length: 18 }, (_, age) => (
                                    <option key={age} value={age}>
                                        {age} years old
                                    </option>
                                ))}
                            </select>
                        ))}
                    </div>
                </div>
            </div>
        );
    }, [childrenCount]);

    return (
        <div className={classNames('top-search__guests-filter', className)}>
            <form className="top-search__guest-filter">
                <label htmlFor="adults-lg" className="top-search__label-filter">
                    Adults
                </label>
                <button
                    id="btn-minus-adults"
                    type="button"
                    className="btn-minus"
                    disabled={adults <= minAdults}
                    onClick={decrementValues}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    value={adults}
                    id="adults-lg"
                    className="top-search__guest-input"
                />
                <button
                    type="button"
                    id="btn-plus-adults"
                    className="btn-plus"
                    disabled={adults >= maxAdults}
                    onClick={incrementValues}
                >
                    +
                </button>
            </form>
            <form className="top-search__guest-filter">
                <label
                    htmlFor="children-lg"
                    className="top-search__label-filter"
                >
                    Children
                </label>
                <button
                    type="button"
                    id="btn-minus-children"
                    className="btn-minus"
                    disabled={childrenCount <= minChildren}
                    onClick={decrementValues}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    value={childrenCount}
                    id="children-lg"
                    className="top-search__guest-input"
                />
                <button
                    type="button"
                    id="btn-plus-children"
                    className="btn-plus"
                    disabled={childrenCount >= maxChildren}
                    onClick={incrementValues}
                >
                    +
                </button>
            </form>
            <form className="top-search__guest-filter">
                <label htmlFor="rooms-lg" className="top-search__label-filter">
                    Rooms
                </label>
                <button
                    type="button"
                    id="btn-minus-rooms"
                    className="btn-minus"
                    disabled={rooms <= minRooms}
                    onClick={decrementValues}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    value={rooms}
                    id="rooms-lg"
                    className="top-search__guest-input"
                />
                <button
                    type="button"
                    id="btn-plus-rooms"
                    className="btn-plus"
                    disabled={rooms >= maxRooms}
                    onClick={incrementValues}
                >
                    +
                </button>
            </form>

            {childrenCount > 0 && formChildrenAge}
        </div>
    );
});

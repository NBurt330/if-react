import React, { useMemo, memo } from 'react';

import classNames from 'classnames';
import {
    minAdults,
    minChildren,
    minRooms,
    maxAdults,
    maxChildren,
    maxRooms,
} from '../../assets/constants/constants';

import { useFormContext } from '../../contexts/Form.context';

import { useTheme } from 'react-jss';
import { useFormGuestsFilterStyles } from './FormGuestsFilterStyles';

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

    const theme = useTheme();
    const classes = useFormGuestsFilterStyles(theme);
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
            <div className={classes.guestFilter}>
                <div className={classes.children}>
                    <h3 className={classes.childrenLabel}>
                        What is the age of the child you’re travelling with?
                    </h3>
                    <div className={classes.childrenWrapper}>
                        {Array.from({ length: childrenCount }, (_, index) => (
                            <select
                                key={index}
                                name="children-lg-age"
                                value={childAge[index]}
                                className={classes.hildrenOption}
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
        <div className={classNames(classes.guestsFilter, className)}>
            <form className={classes.guestFilter}>
                <label htmlFor="adults-lg" className={classes.labelFilter}>
                    Adults
                </label>
                <button
                    id="btn-minus-adults"
                    type="button"
                    className={classes.btnMinus}
                    disabled={adults <= minAdults}
                    onClick={decrementValues}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    name="adults"
                    value={adults}
                    id="adults-lg"
                    className={classes.guestInput}
                />
                <button
                    type="button"
                    id="btn-plus-adults"
                    className={classes.btnPlus}
                    disabled={adults >= maxAdults}
                    onClick={incrementValues}
                >
                    +
                </button>
            </form>
            <form className={classes.guestFilter}>
                <label htmlFor="children-lg" className={classes.labelFilter}>
                    Children
                </label>
                <button
                    type="button"
                    id="btn-minus-children"
                    className={classes.btnMinus}
                    disabled={childrenCount <= minChildren}
                    onClick={decrementValues}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    value={childrenCount}
                    id="children-lg"
                    className={classes.guestInput}
                />
                <button
                    type="button"
                    id="btn-plus-children"
                    className={classes.btnPlus}
                    disabled={childrenCount >= maxChildren}
                    onClick={incrementValues}
                >
                    +
                </button>
            </form>
            <form className={classes.guestFilter}>
                <label htmlFor="rooms-lg" className={classes.labelFilter}>
                    Rooms
                </label>
                <button
                    type="button"
                    id="btn-minus-rooms"
                    className={classes.btnMinus}
                    disabled={rooms <= minRooms}
                    onClick={decrementValues}
                >
                    &ndash;
                </button>
                <input
                    type="text"
                    name="rooms"
                    value={rooms}
                    id="rooms-lg"
                    className={classes.guestInput}
                />
                <button
                    type="button"
                    id="btn-plus-rooms"
                    className={classes.btnPlus}
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

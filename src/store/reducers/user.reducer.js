import { INITIAL_STATE } from './../../assets/constants/initialState';
import { USER } from '../..//assets/constants/actionTypes';

export const userReducer = (state = INITIAL_STATE.user, action) => {
    switch (action.type) {
        case USER.set:
            return { ...action.payload };
        default:
            return state;
    }
};

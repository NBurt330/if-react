import { INITIAL_STATE } from '../../assets/constants/initialState';
import { AUTH } from '../../assets/constants/actionTypes';

export const authReducer = (state = INITIAL_STATE.auth, action) => {
    switch (action.type) {
        case AUTH.setStatus:
            return { ...state, status: action.payload };
        default:
            return state;
    }
};

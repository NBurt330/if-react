import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../assets/constants/initialState';

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE.auth,
    reducers: {
        setStatus: (state, action) => ({ ...state, status: action.payload }),
    },
});
export const authReducer = authSlice.reducer;

export const { setStatus } = authSlice.actions;

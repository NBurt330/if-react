import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../assets/constants/initialState';

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE.user,
    reducers: {
        set: (state, action) => action.payload,
    },
});

export const { set } = userSlice.actions;

export const userReducer = userSlice.reducer;

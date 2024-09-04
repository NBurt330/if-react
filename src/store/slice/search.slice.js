import { createSlice } from '@reduxjs/toolkit';

const initialStateSearch = {
    loading: false,
    hotels: [],
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState: initialStateSearch,
    reducers: {
        searchHotelsRequest: (state) => ({ ...state, loading: true }),
        searchHotelsSuccess: (state, action) => ({
            ...state,
            loading: false,
            hotels: action.payload,
        }),
        searchHotelsFailure: (state, action) => ({
            ...state,
            loading: false,
            error: action.payload,
        }),
    },
});

export const searchHotels = (url) => {
    return async (dispatch) => {
        dispatch(searchHotelsRequest());
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(searchHotelsSuccess(data));
        } catch (error) {
            dispatch(searchHotelsFailure(error.toString()));
        }
    };
};

export const searchReducer = searchSlice.reducer;

export const { searchHotelsRequest, searchHotelsSuccess, searchHotelsFailure } =
    searchSlice.actions;

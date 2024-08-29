import { SEARCH_HOTELS } from '../../assets/constants/searchHotels';

const initialState = {
    loading: false,
    hotels: [],
    error: null,
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_HOTELS.request:
            return { ...state, loading: true };
        case SEARCH_HOTELS.success:
            return {
                ...state,
                loading: false,
                hotels: action.payload,
            };
        case SEARCH_HOTELS.error:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

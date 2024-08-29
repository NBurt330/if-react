import { SEARCH_HOTELS } from '../../assets/constants/searchHotels';
//import { apiHotelsUrl } from '../../services/constants';

export const searchHotelsRequest = () => ({
    type: SEARCH_HOTELS.request,
});
export const searchHotelsSuccess = (hotels) => ({
    type: SEARCH_HOTELS.success,
    payload: hotels,
});

export const searchHotelsFailure = (error) => ({
    type: SEARCH_HOTELS.error,
    payload: error,
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

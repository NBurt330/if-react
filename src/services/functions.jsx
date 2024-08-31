import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { apiHotelsUrl, apiPopularHotelsUrl } from './constants';
import {
    searchHotelsFailure,
    searchHotelsRequest,
    searchHotelsSuccess,
} from '../store/slice/search.slice';
export const getHotels = async () => {
    const { data } = await axios.get(apiPopularHotelsUrl);
    return data;
};

export const getAvailableHotels = async () => {
    const { data } = await axios.get(apiHotelsUrl);
    return data;
};

export const hotelApi = createApi({
    reducerPath: 'hotelApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiHotelsUrl }),
    endpoints: (builder) => ({
        searchHotels: builder.query({
            // Function to construct the query URL with parameters
            query: ({
                cityInput,
                startDateMc,
                endDateMc,
                adults,
                childrenAgeString,
                rooms,
            }) => {
                // Build the query string with the provided parameters
                const params = new URLSearchParams({
                    search: cityInput,
                    dateFrom: startDateMc,
                    dateTo: endDateMc,
                    adults: adults.toString(),
                    children: childrenAgeString,
                    rooms: rooms.toString(),
                });
                return {
                    url: `/?${params.toString()}`, // Append query parameters to the URL
                    method: 'GET',
                };
            },
            onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
                dispatch(searchHotelsRequest());
                try {
                    const data = await queryFulfilled;
                    dispatch(searchHotelsSuccess(data));
                } catch (error) {
                    dispatch(searchHotelsFailure(error.toString()));
                }
            },
        }),
    }),
});
export const { useSearchHotelsQuery } = hotelApi;

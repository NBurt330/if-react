import axios from 'axios';
import { apiHotelsUrl, apiPopularHotelsUrl } from './constants';

export const getHotels = async () => {
    const { data } = await axios.get(apiPopularHotelsUrl);
    return data;
};

export const getAvailableHotels = async () => {
    const { data } = await axios.get(apiHotelsUrl);
    return data;
};

import { apiHotelsUrl } from '../services/constants';
import { getAvailableHotels } from '../services/functions';

const cache = new Map();

export function fetchData(url) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return cache.get(url);
}

async function getData(url) {
    if (url === apiHotelsUrl) {
        return await getAvailableHotels();
    } else {
        throw Error('Not implemented');
    }
}

export const wrapPromise = (promise) => {
    if (promise.status === 'fulfilled') {
        return promise.value;
    } else if (promise.status === 'rejected') {
        throw promise.reason;
    } else if (promise.status === 'pending') {
        throw promise;
    } else {
        promise.status = 'pending';
        promise.then(
            (result) => {
                promise.status = 'fulfilled';
                promise.value = result;
            },
            (reason) => {
                promise.status = 'rejected';
                promise.reason = reason;
            }
        );
        throw promise;
    }
};

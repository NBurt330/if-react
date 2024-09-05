import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { rootReducer } from './slice';
import { hotelApi } from '../services/functions';

export const store = configureStore({
    reducer: rootReducer,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(hotelApi.middleware),
});

export const persistor = persistStore(store);

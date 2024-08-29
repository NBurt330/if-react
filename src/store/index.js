import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const store = configureStore({
    reducer: rootReducer,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
});

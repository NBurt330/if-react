import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth.slice';
import { userReducer } from './user.slice';
import { searchReducer } from './search.slice';
import { hotelApi } from '../../services/functions';

const persistConfig = {
    key: 'root',
    storage,
};
export const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        [hotelApi.reducerPath]: hotelApi.reducer,
        auth: authReducer,
        user: userReducer,
        hotels: searchReducer,
    })
);

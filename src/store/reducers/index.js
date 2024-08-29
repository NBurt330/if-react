import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { searchReducer } from './search.reducer';

export const rootReducer = {
    auth: authReducer,
    user: userReducer,
    hotels: searchReducer,
};

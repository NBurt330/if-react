import { AUTH } from '../../assets/constants/actionTypes';

export const setAuthStatus = (status) => ({
    type: AUTH.setStatus,
    payload: status,
});

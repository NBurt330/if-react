import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import { PATH } from '../assets/constants/constants';

import { App } from '../components/App/App';
import { SystemLayout } from '../components/SystemLayout/SystemLayout';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';

import { HotelPage } from '../pages/HotelPage/HotelPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<SystemLayout />}>
            <Route errorElement={<ErrorBoundary />}>
                <Route path={PATH.index} element={<App />} />
                <Route path={PATH.login} element={<LoginPage />} />
                <Route path="hotels/:hotelId" element={<HotelPage />} />
            </Route>
        </Route>
    )
);

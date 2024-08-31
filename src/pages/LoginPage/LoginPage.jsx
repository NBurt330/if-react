import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from '../../components/Header/Header';
import { Sprite } from '../../components/Sprite/Sprite';
import { Container } from '../../components/Container/Container';
import { Wrapper } from '../../components/Wrapper/Wrapper';

import { PATH } from '../../assets/constants/constants';

import './LoginPage.css';
import { setStatus } from '../../store/slice/auth.slice';
import { authStatuses as AUTH_STATUSES } from '../../assets/constants/authStatuses';

export const LoginPage = () => {
    const emailId = useId();
    const passwordId = useId();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (email && password) {
            dispatch(setStatus(AUTH_STATUSES.loggedIn));
            navigate(PATH.index);
        }
    };

    return (
        <>
            <Sprite />
            <Wrapper className="top">
                <Container>
                    <Header />

                    <div className="login">
                        <h3 className="login__title">Sign In</h3>
                        <form className="login__form" onSubmit={handleLogin}>
                            <label className="login__label" htmlFor={emailId}>
                                Email address
                            </label>
                            <input
                                className="login__field"
                                name="email"
                                id={emailId}
                                type="email"
                                placeholder="Email"
                            />
                            <label
                                className="login__label"
                                htmlFor={passwordId}
                            >
                                Password
                            </label>
                            <input
                                className="login__field"
                                id={passwordId}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <button className="login__button" type="submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </Container>
            </Wrapper>
        </>
    );
};

import React, { useId, useState } from 'react';

import { Header } from '../../components/Header/Header';
import { Sprite } from '../../components/Sprite/Sprite';
import { Container } from '../../components/Container/Container';
import { Wrapper } from '../../components/Wrapper/Wrapper';

import './LoginPage.css';
import { useAuthContext } from '../../contexts/Auth.context';

export const LoginPage = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { logIn } = useAuthContext();

    const emailId = useId();
    const passwordId = useId();

    const handleChangeEmail = (event) => {
        event.preventDefault();
        setUserEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        event.preventDefault();
        setUserPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        logIn(userEmail, userPassword);
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
                                value={userEmail}
                                onChange={handleChangeEmail}
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
                                value={userPassword}
                                onChange={handleChangePassword}
                            />
                        </form>
                        <button
                            className="login__button"
                            type="submit"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                </Container>
            </Wrapper>
        </>
    );
};

import React, { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from '../../components/Header/Header';
import { Sprite } from '../../components/Sprite/Sprite';
import { Container } from '../../components/Container/Container';
import { Wrapper } from '../../components/Wrapper/Wrapper';

import { PATH } from '../../assets/constants/constants';

import backgroundImg from './../../images/castelmezzano.jpg';

import { setStatus } from '../../store/slice/auth.slice';
import { authStatuses as AUTH_STATUSES } from '../../assets/constants/authStatuses';

import { useGlobalStyles } from '../../styles/GlobalStyles';
import { useLoginPageStyles } from './LoginPageStyles';

export const LoginPage = () => {
    const emailId = useId();
    const passwordId = useId();

    useGlobalStyles();
    const classes = useLoginPageStyles();

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
            <Wrapper
                className={classes.top}
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <Container>
                    <Header />

                    <div className={classes.login}>
                        <h3 className={classes.title}>Sign In</h3>
                        <form className={classes.form} onSubmit={handleLogin}>
                            <label className={classes.label} htmlFor={emailId}>
                                Email address
                            </label>
                            <input
                                className={classes.field}
                                name="email"
                                id={emailId}
                                type="email"
                                placeholder="Email"
                            />
                            <label
                                className={classes.label}
                                htmlFor={passwordId}
                            >
                                Password
                            </label>
                            <input
                                className={classes.field}
                                id={passwordId}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <button className={classes.button} type="submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </Container>
            </Wrapper>
        </>
    );
};

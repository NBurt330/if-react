import React from 'react';

import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { Cards } from '../Cards/Cards';

import { useTheme } from 'react-jss';
import { useHomesStyles } from './Homes.Styles';

export const Homes = ({ title }) => {
    const theme = useTheme();
    const classes = useHomesStyles(theme);
    return (
        <Section className={classes.homes}>
            <Container>
                <Title className={classes.homesTitle}>{title}</Title>
                <Cards className={classes.homesPictures}></Cards>
            </Container>
        </Section>
    );
};

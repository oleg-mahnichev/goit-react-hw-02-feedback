import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsContainer, StatItem } from './Statistics.style';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatisticsContainer>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive Feedback: {positivePercentage}%</StatItem>
    </StatisticsContainer>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};



import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsContainer, Button } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <FeedbackOptionsContainer>
        {options.map(option => (
            <Button
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </Button>
        ))}
    </FeedbackOptionsContainer>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

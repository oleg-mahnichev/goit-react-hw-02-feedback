import React from 'react';
import PropTypes from 'prop-types';
import { NotificationContainer } from './Notification.style';

export const Notification = ({ message }) => (
    <NotificationContainer>{message}</NotificationContainer>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

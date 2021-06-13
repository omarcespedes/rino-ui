import React from 'react';

import Notification from './Notification';

export default {
    title: 'UI Elements/Notification',
    component: Notification
};

const Template = (args) => <Notification {...args} />;

export const InfoNotification = Template.bind({});
InfoNotification.args = {
    type: 'info',
    children: 'Info Notification'
};

export const WarningNotification = Template.bind({});
WarningNotification.args = {
    type: 'warning',
    children: 'Warning Notification'
};

export const ErrorNotification = Template.bind({});
ErrorNotification.args = {
    type: 'error',
    children: 'Error Notification',
    onClose: () => {}
};

export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
    type: 'success',
    children: 'Success Notification'
};

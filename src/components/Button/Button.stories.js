import React from 'react';

import Button from './Button';

export default {
    title: 'UI Elements/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryFilled = Template.bind({});
PrimaryFilled.args = {
    appearance: 'filled',
    color: 'primary',
    size: 'md',
    children: 'Button',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
    appearance: 'outlined',
    color: 'primary',
    size: 'md',
    children: 'Button',
};

export const SecondaryFilled = Template.bind({});
SecondaryFilled.args = {
    appearance: 'filled',
    color: 'secondary',
    size: 'md',
    children: 'Button',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
    appearance: 'outlined',
    color: 'secondary',
    size: 'md',
    children: 'Button',
};

export const PrimaryPlain = Template.bind({});
PrimaryPlain.args = {
    appearance: 'plain',
    color: 'primary',
    size: 'md',
    children: 'Button',
};

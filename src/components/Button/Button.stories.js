import React from 'react';

import Button from './Button';
import Icon from '../Icon/Icon';

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

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
    appearance: 'filled',
    color: 'primary',
    size: 'md',
    children: 'Button',
    icon: <Icon icon="coffee" />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    appearance: 'filled',
    color: 'primary',
    size: 'md',
    icon: <Icon icon="coffee" />,
};

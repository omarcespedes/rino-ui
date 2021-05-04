import React from 'react';
import SelectOption from '../SelectOption/SelectOption';

import Select from './Select';

export default {
    title: 'UI Elements/Select',
    component: Select,
};

const Template = (args) => <Select {...args} />;

const cities = [
    <SelectOption value="NY">New York</SelectOption>,
    <SelectOption value="SF">San Francisco</SelectOption>,
    <SelectOption value="VA">Virginia</SelectOption>,
];

export const SelectSimple = Template.bind({});
SelectSimple.args = {
    value: 'placeholder value',
    label: 'City',
    children: cities,
};

export const SelectWithError = Template.bind({});
SelectWithError.args = {
    value: 'placeholder value',
    label: 'Name',
    error: 'the input is not valid',
    children: cities,
};

export const SelectInline = Template.bind({});
SelectInline.args = {
    value: 'placeholder value',
    label: 'Name',
    isInline: true,
    children: cities,
};

export const SelectInlineWithError = Template.bind({});
SelectInlineWithError.args = {
    value: 'placeholder value',
    label: 'Name',
    error: 'the input is not valid',
    isInline: true,
    children: cities,
};

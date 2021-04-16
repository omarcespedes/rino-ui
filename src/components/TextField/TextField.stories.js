import React from 'react';

import TextField from './TextField';

export default {
    title: 'UI Elements/TextField',
    component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const TextFieldSimple = Template.bind({});
TextFieldSimple.args = {
    value: 'placeholder value',
    label: 'Name',
};

export const TextFieldWithError = Template.bind({});
TextFieldWithError.args = {
    value: 'placeholder value',
    label: 'Name',
    error: 'the input is not valid',
};

export const TextFieldInline = Template.bind({});
TextFieldInline.args = {
    value: 'placeholder value',
    label: 'Name',
    isInline: true,
};

export const TextFieldInlineWithError = Template.bind({});
TextFieldInlineWithError.args = {
    value: 'placeholder value',
    label: 'Name',
    error: 'the input is not valid',
    isInline: true,
};

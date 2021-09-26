import React from 'react';

import Checkbox from './Checkbox';

export default {
    title: 'UI Elements/Checkbox',
    component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
    value: 'value',
    label: 'Name',
    checked: true,
    onChange: () => {}
};

export const CheckboxUnchecked = Template.bind({});
CheckboxUnchecked.args = {
    value: 'value',
    label: 'Name',
    checked: false,
    onChange: () => {}
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
    value: 'value',
    label: 'Name',
    checked: false,
    onChange: () => {},
    isDisabled: true
};

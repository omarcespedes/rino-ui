import React from 'react';

import DatePicker from './DatePicker';

export default {
    title: 'UI Elements/DatePicker',
    component: DatePicker,
};

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const Template = (args) => <DatePicker {...args} />;

export const DatePickerSimple = Template.bind({});
DatePickerSimple.args = {
    date: null,
    onDateChange: () => {},
    id: 'simple-datepicker',
};

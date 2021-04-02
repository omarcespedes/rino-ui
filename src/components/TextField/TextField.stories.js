import React from 'react';

import TextField from './TextField';

export default {
  title: 'UI Elements/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'placeholder value',
  label: 'Name',
};

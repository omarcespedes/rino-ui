import React from 'react';

import Navbar from './Navbar';

export default {
    title: 'UI Elements/Navbar',
    component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const SimpleNavbar = Template.bind({});
SimpleNavbar.args = {
    brand: 'RinoScript',
    headerItems: [
        {
            name: 'About us',
        },
        {
            name: 'Contact us',
        },
        {
            name: 'FAQ',
        },
    ],
};

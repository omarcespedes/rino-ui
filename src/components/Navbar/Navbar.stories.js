import React from 'react';

import Navbar from './NavBar';

export default {
    title: 'UI Elements/Navbar',
    component: Navbar
};

const Template = (args) => <Navbar {...args} />;

export const SimpleNavbar = Template.bind({});
SimpleNavbar.args = {
    brand: 'RinoScript',
    headerItems: [
        {
            name: 'About us'
        },
        {
            name: 'Contact us'
        },
        {
            name: 'FAQ'
        }
    ]
};

export const SimpleNavbarWithoutUser = Template.bind({});
SimpleNavbarWithoutUser.args = {
    brand: 'RinoScript',
    headerItems: [
        {
            name: 'About us'
        },
        {
            name: 'Contact us'
        },
        {
            name: 'FAQ'
        }
    ],
    user: null,
    onLoginClick: () => {}
};

export const SimpleNavbarWithUser = Template.bind({});
SimpleNavbarWithUser.args = {
    brand: 'RinoScript',
    headerItems: [
        {
            name: 'About us'
        },
        {
            name: 'Contact us'
        },
        {
            name: 'FAQ'
        }
    ],
    user: { user: true },
    onLoginClick: () => {}
};

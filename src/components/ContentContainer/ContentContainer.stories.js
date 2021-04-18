import React from 'react';

import ContentContainer from './ContentContainer';

export default {
    title: 'UI Elements/ContentContainer',
    component: ContentContainer,
};

const Template = (args) => <ContentContainer {...args} />;

export const ContentContainerBasic = Template.bind({});
ContentContainerBasic.args = {
    className: 'test',
    children: 'test',
    style: {
        border: '1px solid green',
    },
};

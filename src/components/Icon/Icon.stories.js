import React from 'react';

import Icon from './Icon';
import { fas } from '@fortawesome/free-solid-svg-icons';
import IconWrapper from './IconWrapper';

export default {
    title: 'UI Elements/Icon',
    component: Icon,
};

export const allIcons = () => {
    const icons = Object.keys(fas).map((key) => {
        const iconName = fas[key].iconName;
        return <IconWrapper icon={iconName} iconName={iconName} />;
    });
    return <div>{icons}</div>;
};

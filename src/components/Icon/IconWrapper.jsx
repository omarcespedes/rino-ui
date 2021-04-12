import React from 'react';
import Icon from './Icon';

const IconWrapper = ({ icon, iconName, ...rest }) => {
    return (
        <div style={{
            margin: '10px 20px',
            display: 'inline-block',
            textAlign: 'center'
        }}>
            <Icon icon={icon} {...rest} />
            <div style={{
                marginTop: 10
            }}>
                {iconName}
            </div>
        </div>
    )
}

export default IconWrapper;
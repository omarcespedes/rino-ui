import React from 'react';
import cn from 'classnames';

const ContentContainer = ({ children, className, ...rest }) => {
    return (
        <div className={cn('rino-content-container', {
            className
        })} {...rest}>
            {children}
        </div>
    )
}

export default ContentContainer;
import React from 'react';
import cn from 'classnames';

const SideMenu = ({ children, isOpen }, ref) => {

    return (
        <div ref={ref} className={cn('rino-side-menu', {
            open: isOpen
        })}>
            {children}
        </div>
    )
}

export default React.forwardRef(SideMenu);
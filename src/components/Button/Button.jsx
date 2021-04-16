import React from 'react';
import cn from 'classnames';

const Button = ({
    children,
    size = 'md',
    appearance = 'filled',
    color = 'primary',
    icon,
    className,
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={cn('rino-button', {
                [`rino-button-size-${size}`]: true,
                [`rino-button-appearance-${appearance}`]: true,
                primary: color === 'primary',
                secondary: color === 'secondary',
                className
            })}>
            {icon && (
                <span className={cn({
                    'icon-button-container': !!children
                })}>
                    {icon}
                </span>
            )}
            {children}
        </button>
    )
}

export default Button;
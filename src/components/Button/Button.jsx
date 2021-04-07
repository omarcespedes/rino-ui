import React from 'react';
import classnames from 'classnames';

const Button = ({
    children,
    size = 'md',
    appearance = 'filled',
    color = 'primary'
}) => {
    return (
        <button
            className={classnames('rino-button', {
                [`rino-button-size-${size}`]: true,
                [`rino-button-appearance-${appearance}`]: true,
                primary: color === 'primary',
                secondary: color === 'secondary',
            })}>
            {children}
        </button>
    )
}

export default Button;
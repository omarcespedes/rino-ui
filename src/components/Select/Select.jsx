import React from 'react';
import cn from 'classnames';

const Select = ({
    id,
    children,
    className,
    label,
    value,
    onChange,
    isInline,
    error,
    ...rest
}) => {
    return (
        <div className={cn('rino-select base-input', {
            [className]: !!className,
            'inline': isInline
        })}>
            <label htmlFor={id} className="rino-label">{label}</label>
            <div className="input-container">
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={cn('rino-input', {
                        error: !!error
                    })}
                    {...rest}>
                    {children}
                </select>
                {error && (
                    <div className="input-error">
                        {error}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Select;
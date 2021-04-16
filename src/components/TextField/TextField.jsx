import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames';

const TextField = ({
    id,
    value,
    onChange,
    label,
    className = '',
    isInline,
    error,
    ...rest
}) => {
    return (
        <div className={cn('rino-text-field', {
            'inline': isInline,
            className
        })}>
            <label htmlFor={id} className="rino-label">{label}</label>
            <div className="input-container">
                <input id={id} className={cn('rino-input', {
                    error: !!error
                })} {...rest} value={value} onChange={onChange} />
                {error && (
                    <div className="input-error">
                        {error}
                    </div>
                )}
            </div>
        </div>
    )
}

TextField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    isInline: PropTypes.bool,
    error: PropTypes.string,
}

export default TextField;
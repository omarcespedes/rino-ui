import React from 'react';
import PropTypes from 'prop-types'

const TextField = ({
    value,
    onChange,
    label,
    className = '',
    ...rest
}) => {
    return (
        <div className={`text-field ${className}`}>
            <div className="label">{label}</div>
            <input {...rest} value={value} onChange={onChange} />
        </div>
    )
}

TextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string,
}

export default TextField;
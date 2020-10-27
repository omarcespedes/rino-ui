import React from 'react';

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

export default TextField;
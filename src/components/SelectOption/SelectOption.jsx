import React from 'react';

const SelectOption = ({
    children,
    value,
    ...rest
}) => {
    return (
        <option className="rino-select-option" value={value} {...rest}>
            {children}
        </option>
    )
}

export default SelectOption;
import React from 'react';
import cn from 'classnames';

const Checkbox = ({
    id,
    label,
    value,
    checked,
    onChange,
    name,
    className,
    defaultChecked,
    isDisabled,
    ...rest
}) => {
    return (
        <label
            htmlFor={id}
            className={cn('rino-checkbox', {
                disabled: isDisabled,
                [className]: className
            })}
            {...rest}
        >
            <input
                type="checkbox"
                id={id}
                value={value}
                name={name}
                disabled={isDisabled}
                checked={checked}
                onChange={onChange}
                defaultChecked={defaultChecked}
            />

            <span className="checkmark" />
            {label}
        </label>
    );
};

export default Checkbox;

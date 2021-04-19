import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import useResponsiveBreakpoint from '../../hooks/useResponsiveBreakpoint';

const DatePicker = ({
    id,
    date,
    onDateChange,
    ...rest
}) => {
    const [focused, setFocused] = useState(null);
    const { isMobile } = useResponsiveBreakpoint();

    const focusChange = ({ focused }) => setFocused(focused);
    return (
        <SingleDatePicker
            {...rest}
            id={id}
            date={date}
            numberOfMonths={isMobile ? 1 : 2}
            onDateChange={onDateChange}
            focused={focused}
            onFocusChange={focusChange}
            hideKeyboardShortcutsPanel />
    )
}

export default DatePicker;
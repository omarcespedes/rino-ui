import React from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';

const Notification = ({ type, title, children, onClose, className }) => {
    const iconMap = {
        info: 'info-circle',
        warning: 'exclamation-triangle',
        error: 'times',
        success: 'check'
    };

    switch (type) {
        case 'info':
            title = title || 'Information';
            break;
        case 'warning':
            title = title || 'Warning';
            break;
        case 'error':
            title = title || 'Error';
            break;
        case 'success':
            title = title || 'Success';
            break;

        default:
            break;
    }

    return (
        <div
            className={cn('rino-notification', className, {
                [type]: true
            })}
        >
            <span className="icon-container">
                <Icon
                    size="2x"
                    className="notification-icon"
                    icon={iconMap[type]}
                />
            </span>
            <div className="notification-content">
                <h6 className="notification-title">{title}</h6>
                <div>{children}</div>
                {onClose && (
                    <span className="close-icon" onClick={onClose}>
                        <Icon size="1x" icon="times" />
                    </span>
                )}
            </div>
        </div>
    );
};

export default Notification;

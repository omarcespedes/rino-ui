import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import useResponsiveBreakpoint from '../../hooks/useResponsiveBreakpoint';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import SideMenu from '../SideMenu/SideMenu';

const NavBar = ({
    brand,
    brandLogo,
    headerItems = [],
    onLoginClick,
    user = false,
    onUserClick
}) => {
    const sideMenuRef = useRef(null);
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const { isMobile } = useResponsiveBreakpoint();
    useOnClickOutside(sideMenuRef, () => setSideMenuOpen(false));

    const headerButtons = headerItems.map((headerItem, i) => {
        return (
            <Button key={i} size="sm" appearance="plain">
                {headerItem.name}
            </Button>
        );
    });

    return (
        <nav className="rino-navbar">
            {isMobile && (
                <>
                    <Button
                        size="sm"
                        icon={<Icon icon="bars" />}
                        onClick={() => setSideMenuOpen((prevVal) => !prevVal)}
                    />
                    <SideMenu ref={sideMenuRef} isOpen={sideMenuOpen}>
                        {headerButtons}
                    </SideMenu>
                </>
            )}
            <div className="brand-container">
                {brandLogo && (
                    <span className="logo-container">{brandLogo}</span>
                )}
                <span className="brand">{brand}</span>
            </div>
            {!isMobile && (
                <div className="items-container">
                    {headerButtons}
                    {onLoginClick && !user && (
                        <Button
                            className="login-button"
                            appearance="outlined"
                            size="sm"
                        >
                            Log In
                        </Button>
                    )}
                    {user && (
                        <Button
                            size="sm"
                            className="user-button"
                            appearance="outlined"
                            icon={<Icon icon="user-circle" />}
                            onClick={onUserClick}
                        />
                    )}
                </div>
            )}
        </nav>
    );
};

export default NavBar;

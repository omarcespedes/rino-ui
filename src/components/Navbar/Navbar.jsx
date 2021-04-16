import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useResponsiveBreakpoint from '../../hooks/useResponsiveBreakpoint'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import SideMenu from '../SideMenu/SideMenu'

const Navbar = ({
    brand,
    brandLogo,
    headerItems = []
}) => {
    const sideMenuRef = useRef(null);
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const { isMobile } = useResponsiveBreakpoint();
    useOnClickOutside(sideMenuRef, () => setSideMenuOpen(false));

    const headerButtons = headerItems.map((headerItem, i) => {
        return (
            <Button
                key={i}
                size="sm"
                appearance="plain">
                {headerItem.name}
            </Button>
        )
    })

    return (
        <nav className="rino-navbar">
            {isMobile && (
                <>
                    {/* add button with icon */}
                    <div className="hamburger-container" onClick={() => setSideMenuOpen(prevVal => !prevVal)}>
                        <Icon icon="bars" />
                    </div>
                    <SideMenu ref={sideMenuRef} isOpen={sideMenuOpen}>
                        {headerButtons}
                    </SideMenu>
                </>
            )}
            <div className="brand-container">
                {brandLogo && (
                    <span className="logo-container">
                        {brandLogo}
                    </span>
                )}
                <span className="brand">
                    {brand}
                </span>
            </div>
            {!isMobile && (
                <div className="items-container">
                    {headerButtons}
                </div>
            )}
        </nav>
    )
}

export default Navbar;
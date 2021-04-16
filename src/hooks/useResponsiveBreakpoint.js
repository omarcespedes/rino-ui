import { useWindowSize } from './useWindowSize';
import {
    XS_BREAKPOINT,
    SM_BREAKPOINT,
    MD_BREAKPOINT,
    LG_BREAKPOINT,
    XL_BREAKPOINT,
    XXL_BREAKPOINT,
} from '../constants';

const useResponsiveBreakpoint = () => {
    const { width } = useWindowSize();

    const isXS = width < XS_BREAKPOINT;
    const isSM = width >= SM_BREAKPOINT && width < MD_BREAKPOINT;
    const isMD = width >= MD_BREAKPOINT && width < LG_BREAKPOINT;
    const isLG = width >= LG_BREAKPOINT && width < XL_BREAKPOINT;
    const isXL = width >= XL_BREAKPOINT && width < XXL_BREAKPOINT;
    const isXXL = width >= XXL_BREAKPOINT;

    return {
        isMobile: isXS || isSM,
        isTablet: isMD,
        isDesktop: isLG || isXL || isXXL,
    };
};

export default useResponsiveBreakpoint;

import { useMediaQuery } from 'react-responsive';
import { ScreenSize } from "@src/defs/types";

function useResponsive() {
	const isDesktop = useMediaQuery({
		minWidth: 1400
	});
	const isLaptop = useMediaQuery({
		minWidth: 1100, maxWidth: 1400
	})
	const isTablet = useMediaQuery({
		minWidth: 800, maxWidth: 1100
	})
	const isMobile = useMediaQuery({
		minWidth: 320, maxWidth: 800
	})
	const isNano = useMediaQuery({
		maxWidth: 320
	})
	const isSmall = useMediaQuery({
		maxWidth: 640
	})

	const sizeIs:ScreenSize = (() => {
		switch (true) {
			case isDesktop: return 'desktop';
			case isLaptop: return 'laptop';
			case isTablet: return 'tablet';
			case isMobile: return 'mobile';
			default: return 'nano'
		}
	})();

	return {
		isDesktop, isLaptop, isTablet, isMobile, sizeIs, isNano,
		isSmall, useMediaQuery
	}
}

export default useResponsive;
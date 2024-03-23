import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MediaQueryBreakPointType, MediaQueryDirection } from '@/types/common';

const useMediaQueryHook = (
  breakPoint: MediaQueryBreakPointType,
  direction: MediaQueryDirection
): boolean => {
  const theme = useTheme();
	const upBreakPoint = useMediaQuery(theme.breakpoints.up(breakPoint));
	const downBreakPoint = useMediaQuery(theme.breakpoints.down(breakPoint));
	const onlyBreakPoint = useMediaQuery(theme.breakpoints.only(breakPoint));
  if (direction === 'up') {
    return upBreakPoint;
  } else if (direction === 'down') {
    return downBreakPoint;
  } else if (direction === 'only') {
    return onlyBreakPoint
  } else {
    return false;
  }
};

export const useIsScreenSizeAbove = (breakPoint: MediaQueryBreakPointType): boolean => {
  return useMediaQueryHook(breakPoint, 'up');
};

export const useIsScreenSizeBelow = (breakPoint: MediaQueryBreakPointType): boolean => {
  return useMediaQueryHook(breakPoint, 'down');
};

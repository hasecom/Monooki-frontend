import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MediaQueryBreakPointType,MediaQueryDirection } from '@/types/common';

const mediaQuery = (
	breakPoint:MediaQueryBreakPointType,
	direction:MediaQueryDirection
	):boolean => {
	const theme = useTheme();
	let matches;
	if (direction === 'up') {
    matches = useMediaQuery(theme.breakpoints.up(breakPoint));
  } else if (direction === 'down') {
    matches = useMediaQuery(theme.breakpoints.down(breakPoint));
  } else if (direction === 'only') {
    matches = useMediaQuery(theme.breakpoints.only(breakPoint));
  } else {
    console.error('Invalid operator');
    return false;
  }
	return matches;  
}

const isScreenSizeAbove = (breakPoint:MediaQueryBreakPointType):boolean => {
  return mediaQuery(breakPoint, 'up');
};

const isScreenSizeBelow = (breakPoint:MediaQueryBreakPointType):boolean => {
  return mediaQuery(breakPoint, 'down');
};

export {isScreenSizeAbove,isScreenSizeBelow}
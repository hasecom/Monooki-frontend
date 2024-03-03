'use client'
import { NextPage } from 'next';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { MainAppBarProps } from '@/types/common';
import HamburgerButton from '../../ui/button/hamburgerButton';
import MainAccordion from './mainAccordion';
import { useCycle } from 'framer-motion';
import SideDrawer from '../drawer/sideDrawer';
import { usePresetContext } from '@/provider/preSetProvider';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width: '20ch',
			'&:focus': {
				width: '25ch',
			},
		},
	},
}));
const MainAppBar:NextPage<MainAppBarProps> = (props) => {
	const { category,tag } = usePresetContext();
	
	//ハンバーガー
	const [isOpen, toggleOpen] = useCycle(false, true);
	const toggle = () => {
		toggleOpen();
	};
	return (
			<AppBar position="sticky" color="inherit" >
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						MONOOKI
					</Typography>
					<Search>
						<SearchIconWrapper sx={{zIndex:10}}>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
							sx={{ backgroundColor: '#dfe6e9',borderRadius: '16px' }}
						/>
					</Search>
					<Box sx={{ display: { xs: 'block', sm: 'none' },paddingLeft:1 }}>
							<HamburgerButton isOpenSideBar={props.isOpenSideBar} isOpen={isOpen} toggle={toggle} />
					</Box>
				</Toolbar>
				<MainAccordion category={category.data} tag={tag.data} />
				<SideDrawer isOpen={isOpen} toggle={toggle} category={category.data} tag={tag.data} />
			</AppBar>
	);
}

export default MainAppBar;
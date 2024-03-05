'use client'
import { NextPage } from 'next';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { MainAppBarProps } from '@/types/common';
import HamburgerButton from '../../ui/button/hamburgerButton';
import MainAccordion from './mainAccordion';
import { useCycle } from 'framer-motion';
import SideDrawer from '../drawer/sideDrawer';
import { usePresetContext } from '@/provider/preSetProvider';
import SearchInputForm from '../search/searchInput';


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
					<SearchInputForm />
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
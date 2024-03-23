'use client'
import { NextPage } from 'next';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { MainAppBarProps } from '@/types/common';
import HamburgerButton from '../../ui/button/hamburgerButton';
import MainAccordion from './mainAccordion';
import { useCycle } from 'framer-motion';
import SideDrawer from '../drawer/sideDrawer';
import { usePresetContext } from '@/provider/preSetProvider';
import SearchInputForm from '../search/searchInput';
import Link from 'next/link';
import { PAGES } from '@/constant/preset';
import { assetLinks } from '@/constant/preset';

const MainAppBar: NextPage<MainAppBarProps> = (props) => {
	const { category, tag } = usePresetContext();
	const [isOpen, toggleOpen] = useCycle(false, true);
	if (!category || !tag) return <></>;
	//ハンバーガー
	const toggle = () => {
		toggleOpen();
	};
	return (
		<AppBar position="sticky" color="inherit" >
			<Toolbar>
				<Link href={PAGES.HOME_PAGE}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{
							px: 2,
							'& img': {
								maxHeight: '40px'
							}
						}}
					>
						<img src={assetLinks.headerIcon} alt="" />
					</IconButton>
				</Link>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					MONOOKI
				</Typography>
				<SearchInputForm />
				<Box sx={{ display: { xs: 'block', sm: 'none' }, paddingLeft: 1 }}>
					<HamburgerButton isOpenSideBar={props.isOpenSideBar} isOpen={isOpen} toggle={toggle} />
				</Box>
			</Toolbar>
			<MainAccordion category={category.data} tag={tag.data} />
			<SideDrawer isOpen={isOpen} toggle={toggle} category={category.data} tag={tag.data} />
		</AppBar>
	);
}

export default MainAppBar;
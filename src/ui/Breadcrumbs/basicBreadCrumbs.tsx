'use client'
import React, { Fragment, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import MUILink from '@mui/material/Link';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Divider } from '@mui/material';
import { useBreadCrumbContext } from '@/provider/breadCrumbProvider';

const BasicBreadCrumbs = () => {
	const { breadCrumbValue, addCurrentLocation } = useBreadCrumbContext();
	useEffect(() => {
		addCurrentLocation({
			name: "カテゴリ",
			path: "/category",
			isLink: true
		})
	}, [])
	const breadcrumbs = [
		...breadCrumbValue.map((link, index) => {
			return (
				<NextLink href={link.path} key={index}>
						{link.name}
				</NextLink>
			)
		})
		// <Typography key="3" color="text.primary">
		// 	Breadcrumb
		// </Typography>, */}

	];
	return (
		<>
			<Divider />
			<Stack spacing={2} sx={{
				paddingY: 1.5,
				paddingX: 3
			}}>
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize="small" />}
					aria-label="breadcrumb"
				>
					{breadcrumbs}
				</Breadcrumbs>
			</Stack>
			<Divider />
		</>
	);
}
export default BasicBreadCrumbs;
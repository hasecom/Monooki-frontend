'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Divider, Typography } from '@mui/material';
import { useBreadCrumbContext } from '@/provider/breadCrumbProvider';
import { isScreenSizeAbove } from '@/util/mediaQuery';
const BasicBreadCrumbs = () => {
	const { breadCrumbValue } = useBreadCrumbContext();
	const isScreenSizeAboveMd = isScreenSizeAbove('sm');
	const breadcrumbs = [
		...breadCrumbValue.map((link, index) => {

			return (
				link.isLink ? (
					<NextLink href={link.path as string} key={index}>
						<Typography key={index} variant={isScreenSizeAboveMd ? 'body1' : 'caption'}  color="text.secondary">
						{link.name}
						</Typography>
					</NextLink>
				) : (
					<Typography key={index} variant={isScreenSizeAboveMd ? 'body1' : 'caption'}   color="text.primary">
						{link.name}
					</Typography>
				)
			)
		})
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
					sx={{
						"& li": {
							margin: isScreenSizeAboveMd? 1: 0.2
						}
					}}
				>
					{breadcrumbs}
				</Breadcrumbs>
			</Stack>
			<Divider />
		</>
	);
}
export default BasicBreadCrumbs;
'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Divider, Typography } from '@mui/material';
import { useBreadCrumbContext } from '@/provider/breadCrumbProvider';
const BasicBreadCrumbs = () => {
	const { breadCrumbValue } = useBreadCrumbContext();

	const breadcrumbs = [
		...breadCrumbValue.map((link, index) => {

			return (
				link.isLink ? (
					<NextLink href={link.path as string} key={index}>
						{link.name}
					</NextLink>
				) : (
					<Typography key="3" color="text.primary">
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
				>
					{breadcrumbs}
				</Breadcrumbs>
			</Stack>
			<Divider />
		</>
	);
}
export default BasicBreadCrumbs;
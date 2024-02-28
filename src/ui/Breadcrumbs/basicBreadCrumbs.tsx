import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Divider } from '@mui/material';

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const BasicBreadCrumbs = () => {
	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
			MUI
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="inherit"
			href="/material-ui/getting-started/installation/"
			onClick={handleClick}
		>
			Core
		</Link>,
		<Typography key="3" color="text.primary">
			Breadcrumb
		</Typography>,
	];

	return (
		<>
		<Divider />
		<Stack spacing={2} sx={{
			paddingY:1.5,
			paddingX:3
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
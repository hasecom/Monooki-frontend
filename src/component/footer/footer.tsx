import { isScreenSizeAbove } from "@/util/mediaQuery";
import { Box, Grid, List, ListItem, Typography, ListItemText } from "@mui/material";
import { constantLink, credit, footerCategoryLinks, Heading } from "@/constant/preset";

const Footer = () => {
	return (
		<>
			{isScreenSizeAbove('sm') ? (
				<PcFooter />
			) : (
				<SmFooter />
			)}
		</>
	)
}

export default Footer;

const PcFooter = () => {
	return (
		<Box sx={{
			minHeight: '300px',
			marginTop: 6,
			background: '#ededed',
			paddingTop: '50px'
		}}>
			<Grid container spacing={2} justifyContent="center">
				<Grid item xs={3}>

				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1" component="div" sx={{ paddingX: 2 }}>
						{Heading.Footer.CategoryList}
					</Typography>
					<List>
						{footerCategoryLinks.map((link, index) => (
							<ListItem><ListItemText secondary={link.label} /></ListItem>
						))}
					</List>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body1" component="div" sx={{ paddingX: 2 }}>
						{Heading.Footer.AboutService}
					</Typography>
					<List>
						{constantLink.map((link, index) => (
							<ListItem><ListItemText secondary={link.label} /></ListItem>
						))}
					</List>
				</Grid>
			</Grid>
		</Box>
	)
}

const SmFooter = () => {
	return (
		<Box sx={{ minHeight: '300px', background: '#ededed' }}>
			<Box
				sx={{

					color: '#b2b2b2',
					paddingX: 4,
					paddingY: 8
				}}
			>
				<Grid container columns={{ xs: 4, md: 4 }}>
					{constantLink.map((link, index) => (
						<Grid item key={index} sx={{ margin: '0 auto' }}>
							<Typography variant="body2">{link.label}</Typography>
						</Grid>
					))}
				</Grid>
				<Box sx={{ paddingY: 2 }}>
					<Typography variant="body2" sx={{ textAlign: 'center' }}>{credit}</Typography>
				</Box>
			</Box>

		</Box>
	)
}
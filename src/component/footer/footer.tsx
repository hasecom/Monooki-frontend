'use client'
import { isScreenSizeAbove } from "@/util/mediaQuery";
import { Box, Grid, List, ListItem, Typography, ListItemText } from "@mui/material";
import { constantLink, credit, footerCategoryLinks, Heading } from "@/constant/preset";
import { NextPage } from "next";
import { constantLinkType,footerCategoryLinksType } from "@/types/common";
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
				<Grid item xs={3}></Grid>
				<PcFooterGrid headingText={Heading.Footer.AboutService} links={footerCategoryLinks} />
				<PcFooterGrid headingText={Heading.Footer.AboutService} links={constantLink} />
			</Grid>
		</Box>
	)
}
type PcFooterGridTypes = {
	headingText:string,
	links:constantLinkType[] | footerCategoryLinksType[]
} 
const PcFooterGrid:NextPage<PcFooterGridTypes> = ({headingText,links}) => {
	return (
		<Grid item xs={3}>
			<Typography variant="body1" component="div" sx={{ paddingX: 2 }}>
				{headingText}
			</Typography>
			<List>
				{links.map((link, index) => (
					<ListItem key={index}><ListItemText secondary={link.label} /></ListItem>
				))}
			</List>
		</Grid>
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
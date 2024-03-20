'use client'
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { Box, Grid, List, ListItem, Typography, ListItemText, ListItemButton } from "@mui/material";
import { credit, footerCategoryLinks, Heading, PAGES } from "@/constant/preset";
import { NextPage } from "next";
import { footerCategoryLinksType } from "@/types/common";
import { usePresetContext } from '@/provider/preSetProvider';
import { SingleContentType } from "@/types/data";
import NextLink from 'next/link';
const Footer = () => {
	const { singleContent } = usePresetContext();
	const footerSingleContent = (singleContent?.data) ? singleContent.data.filter(item => item.content_type == 1) : [];
	return (
		<>
			{useIsScreenSizeAbove('sm') ? (
				<PcFooter footerLinks={footerSingleContent} />
			) : (
				<SmFooter footerLinks={footerSingleContent} />
			)}
		</>
	)
}

export default Footer;
type FooterBodyProps = {
	footerLinks: SingleContentType[]
}
const PcFooter = ({ footerLinks }: FooterBodyProps) => {
	return (
		<Box sx={{
			minHeight: '300px',
			marginTop: 6,
			background: '#ededed',
			paddingTop: '50px'
		}}>
			<Grid container spacing={2} justifyContent="center">
				<Grid item xs={3}></Grid>
				<PcFooterGrid headingText={Heading.Footer.CategoryList} links={footerCategoryLinks} />
				<PcFooterGrid headingText={Heading.Footer.AboutService} links={footerLinks} />
			</Grid>
		</Box>
	)
}
type PcFooterGridTypes = {
	headingText: string,
	links: SingleContentType[] | footerCategoryLinksType[]
}
const PcFooterGrid: NextPage<PcFooterGridTypes> = ({ headingText, links }) => {
	if (!links) return <></>;
	return (
		<Grid item xs={3}>
			<Typography variant="body1" component="div" sx={{ paddingX: 2 }}>
				{headingText}
			</Typography>
			<List>
				{links.map((link, index) => (
					<ListItem key={index}>
						<ListItemButton component="a" key={index} href={
							isSingleContentType(link) ?
								`${PAGES.SINGLE_PAGE}${link.attribute}` : `${link.link}`
						} >
							<ListItemText secondary={isSingleContentType(link) ? link.title : link.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Grid>
	)
}

const SmFooter = ({ footerLinks }: FooterBodyProps) => {
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
					{footerLinks.map((link, index) => (
						<Grid item key={index} sx={{ margin: '0 auto' }}>
							<NextLink href={`${PAGES.SINGLE_PAGE}${link.attribute}`} key={index} >
								<Typography key={index} variant={'body2'}  className="hover:underline">
									{link.title}
								</Typography>
							</NextLink>
							
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
const isSingleContentType = (link: SingleContentType | footerCategoryLinksType): link is SingleContentType => {
	return (link as SingleContentType).title !== undefined;
}
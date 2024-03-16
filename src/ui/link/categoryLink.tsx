'use client'
import { Box, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CategoryLinkProps, TagLinkProps } from "@/types/common";
import { CategoryGridPapers } from "../paper/paper";
import { NextPage } from "next";
import NextLink from 'next/link';
import Link from "next/link";
import { PAGES } from "@/constant/preset";
const CategoryLink: NextPage<CategoryLinkProps | TagLinkProps> = ({ category, length = 10 }) => {
	return (
		<Box sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
			{category.slice(0, length).map((item, index) => (
				<Box key={index} sx={{ display: 'inline-block', paddingX: 2, paddingY: 2 }}>
					<NextLink href={`${PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE}/${item.attribute}`} key={index} >
						<Typography key={index} variant={'body1'} color="text.primary" className="hover:underline">
							{item.name}
						</Typography>
					</NextLink>
				</Box>
			))}
			<Box sx={{ display: 'inline-block', paddingX: 2, paddingY: 2, color: '#636e72' }}>
				<Link href={PAGES.CATEGORY_LIST_PAGE}>すべてを見る</Link>
				<KeyboardArrowRightIcon />
			</Box>
		</Box>
	)
}
const CategoryPaperLink: NextPage<CategoryLinkProps | TagLinkProps> = (props) => {
	return (
		<>
			<CategoryGridPapers {...props} />
			<Box sx={{ textAlign: 'right', paddingY: 2, color: '#636e72' }}>
				<Typography variant="subtitle2">
					すべてを見る<KeyboardArrowRightIcon />
				</Typography>
			</Box>
		</>
	)
}
export { CategoryLink, CategoryPaperLink }
'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';

import { Grid } from '@mui/material';
import { NextPage } from 'next';
import { CategoryLinkProps, TagLinkProps } from '@/types/common';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { PAGES } from '@/constant/preset';

const CategoryGridPapers: NextPage<CategoryLinkProps | TagLinkProps> = ({ category, length,type }) => {
	const recipeMapType = type == "category" ? PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE : PAGES.TAG_RECIPE_MAP_LIST_PAGE;
	return (
		<Grid container>
			{category.slice(0, length).map((item, index) => (
				<Grid item xs={4} key={index} sx={{ marginY: 0.1 }}>
					<Paper elevation={0} sx={{ paddingX: 0.2, paddingY: 1, height: '100%', textAlign: 'center', borderRadius: '0px' }}>
						<NextLink href={recipeMapType+item.attribute}>
							<Typography variant="body2">
								{item.name}
							</Typography>
						</NextLink>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
}
export { CategoryGridPapers } 
'use client'
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CategoryTitle, CategoryMainTitle } from "@/ui/text/title";
import { usePresetContext } from "@/provider/preSetProvider";
import { CategoryType } from "@/types/data";
import { PAGES, TYPES } from "@/constant/preset";
import { Fragment } from "react";
import { Box, Typography } from "@mui/material";

import link from 'next/link';
/**
* @namespace
* - used category page
*/
const CategoryList = () => {
	const { category } = usePresetContext();
	const categoryData = category?.data && category.data;
	if (category?.loading) return <><Skeleton /></>;
	const CategoryListByMainType = ({ parentCategory }: { parentCategory: CategoryType }) => {
		return (
			<>
				{(categoryData)
					?.filter((category) => category.category_type == parentCategory.id)
					.map((category, index) => (
						<Grid container spacing={0} sx={{ my: 2 }} key={index}>
							<Grid item xs={3} md={3}>
								<Skeleton variant="rectangular" width={'50px'} height={'50px'} />
							</Grid>
							<Grid item xs={9} md={9}>
								<CategoryTitle>{category.name}</CategoryTitle>
								<CategoryListBySubType parentCategory={category} />
							</Grid>
						</Grid>
					))}
			</>
		)
	}
	const CategoryListBySubType = ({ parentCategory }: { parentCategory: CategoryType }) => {
		return (
			<>
				{(categoryData)
					?.filter((category) => category.category_type == parentCategory.id)
					.map((category, index) => (
					<Box key={index} sx={{ display: 'inline-block', paddingX: 2, paddingY: 2 }}>
						<NextLink href={PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE+category.attribute as string} key={index}>
						<Typography key={index} variant={'body1'}  color="text.primary">
						{category.name}
						</Typography>
					</NextLink>
					</Box>
				))}
			</>
		)
	}
	return (
		<>
			{(categoryData)
				?.filter((category) => category.class_name == TYPES.CATEGORY.CATEGORY_MAIN_CATEGORY)
				.map((category, index) => (
					<Fragment key={index}>
						<CategoryMainTitle>{category.name}</CategoryMainTitle>
						<CategoryListByMainType parentCategory={category} />
					</Fragment>
				))}
		</>
	)
}
export default CategoryList;

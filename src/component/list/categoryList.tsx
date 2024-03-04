'use client'
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CategoryTitle, CategoryMainTitle } from "@/ui/text/title";
import { usePresetContext } from "@/provider/preSetProvider";
import { CategoryType } from "@/types/data";
import { TYPES } from "@/constant/preset";
import { Fragment } from "react";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
/**
* @namespace
* - used category page
*/
const CategoryList = () => {
	const { category } = usePresetContext();
	const categoryData = category.data && category.data;
	if (category.loading) return <></>;
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
						{category.name}
					</Box>
				))}
				<Box sx={{ display: 'inline-block', paddingX: 2, paddingY: 2, color: '#636e72' }}>
					すべてを見る
					<KeyboardArrowRightIcon />
				</Box>
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

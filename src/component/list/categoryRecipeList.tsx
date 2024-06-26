'use client'
import { NextPage } from "next";
import { CategoryType } from "@/types/data";
import { Grid } from "@mui/material";
import { CategoryAndTagMainTitle } from "@/ui/text/title";
import RecipeCategoryList from "./recipeCategoryList";
type CategoryRecipeListProps<T> = {
	category: T
}

const CategoryRecipeList: NextPage<CategoryRecipeListProps<CategoryType>> = (
	{ category }) => {
	return (
		<>
			<Grid container spacing={0} sx={{ my: 2 }} >
				<Grid item xs={12} md={12}>
					<CategoryAndTagMainTitle>{category.name}</CategoryAndTagMainTitle>
					<RecipeCategoryList categoryId={category.id} />
				</Grid>
			</Grid>
		</>
	)
}
export default CategoryRecipeList;
'use client'
import { NextPage } from "next";
import { TagType } from "@/types/data";
import { Grid } from "@mui/material";
import { CategoryAndTagMainTitle } from "@/ui/text/title";
import RecipeTagList from "./recipeTagList";
type TagRecipeListProps<T> = {
	tag: T
}
const TagRecipeList: NextPage<TagRecipeListProps<TagType>> = (
	{ tag }) => {
	return (
		<>
			<Grid container spacing={0} sx={{ my: 2 }} >
				<Grid item xs={12} md={12}>
					<CategoryAndTagMainTitle>{tag.name}</CategoryAndTagMainTitle>
					<RecipeTagList tagId={tag.id} />
				</Grid>
			</Grid>
		</>
	)
}
export default TagRecipeList;
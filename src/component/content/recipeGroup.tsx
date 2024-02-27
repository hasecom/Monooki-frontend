import { Box } from "@mui/material";
import RecipeVideo from "./recipeVideo";
import { NextPage } from "next";
import { RecipeGroupProps } from "@/types/common";
import { RecipeTitle } from "@/ui/text/title";
const RecipeGroup:NextPage<RecipeGroupProps> = ({recipe}) => {
	return (
		<>
		<Box>
			<RecipeVideo />
			<RecipeTitle>{recipe.name}</RecipeTitle>
		</Box>
		</>
	)
}
export default RecipeGroup;
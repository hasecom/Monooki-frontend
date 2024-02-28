'use client'
import { Box } from "@mui/material";
import RecipeVideo from "./recipeVideo";
import { NextPage } from "next";
import { RecipeGroupProps } from "@/types/common";
import { RecipeTitle } from "@/ui/text/title";
import RecipeFlow from "./recipeFlow";
import { isScreenSizeAbove } from "@/util/mediaQuery";
const RecipeGroup: NextPage<RecipeGroupProps> = ({ recipe }) => {
	if (isScreenSizeAbove('sm')) {//pc
		return (
			<Box>
				<RecipeVideo />
				<Box sx={{ paddingX: 1 }}>
					<RecipeTitle>{recipe.name}</RecipeTitle>
					<RecipeFlow recipe={recipe} />
				</Box>
			</Box>
		)
	} else {//スマホ
		return (
			<Box>
				<Box sx={{ paddingX: 1 }}>
					<RecipeTitle>{recipe.name}</RecipeTitle>
				</Box>
				<RecipeVideo />
				<Box sx={{ paddingX: 1,paddingY:2 }}>
					<RecipeFlow recipe={recipe} />
				</Box>
			</Box>
		)
	}
}
export default RecipeGroup;
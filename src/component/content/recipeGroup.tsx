'use client'
import { Box } from "@mui/material";
import RecipeVideo from "./recipeVideo";
import { NextPage } from "next";
import { RecipeGroupProps } from "@/types/common";
import { RecipeHeading, RecipeFlowHeading } from "@/ui/text/title";
import RecipeFlow from "./recipeFlow";
import { isScreenSizeAbove } from "@/util/mediaQuery";
import Divider from '@mui/material/Divider';
import { MainContentText } from "@/ui/text/content";

const RecipeGroup: NextPage<RecipeGroupProps> = ({ recipe }) => {
	if (isScreenSizeAbove('sm')) {//pc
		return (
			<Box>
				<RecipeVideo />
				<Box sx={{ paddingX: 1 }}>
					<RecipeHeading>{recipe.name}</RecipeHeading>
					<MainContentText>{recipe.introduction}</MainContentText>
					<RecipeFlowHeading>手順</RecipeFlowHeading>
					<RecipeFlow recipe={recipe} />
					<Divider sx={{ paddingY: 2 }} />
					<RecipeFlowHeading>備考</RecipeFlowHeading>
					<MainContentText>{recipe.remark}</MainContentText>
					<Divider sx={{ paddingY: 2 }} />
				</Box>
			</Box>
		)
	} else {//スマホ
		return (
			<Box>
				<Box sx={{ paddingX: 1 }}>
					<RecipeHeading>{recipe.name}</RecipeHeading>
				</Box>
				<RecipeVideo />
				<Box sx={{ paddingX: 1, paddingY: 2 }}>
					<MainContentText>{recipe.introduction}</MainContentText>
					<RecipeFlowHeading>手順</RecipeFlowHeading>
					<RecipeFlow recipe={recipe} />
					<Divider sx={{ paddingY: 2 }} />
					<RecipeFlowHeading>備考</RecipeFlowHeading>
					<MainContentText>{recipe.remark}</MainContentText>
					<Divider sx={{ paddingY: 2 }} />
				</Box>
			</Box>
		)
	}
}
export default RecipeGroup;
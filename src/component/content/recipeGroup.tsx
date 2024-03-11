'use client'
import { Box } from "@mui/material";
import RecipeVideo from "./recipeVideo";
import { NextPage } from "next";
import { RecipeHeading, RecipeFlowHeading } from "@/ui/text/title";
import RecipeFlow from "./recipeFlow";
import { isScreenSizeAbove } from "@/util/mediaQuery";
import Divider from '@mui/material/Divider';
import { MainContentText } from "@/ui/text/content";
import { RecipeType } from "@/types/data";
type RecipeGroupProps = {
	recipe:RecipeType | null
}
const RecipeGroup: NextPage<RecipeGroupProps> = ({ recipe }) => {
	if(!recipe) return <>NotFound.</>
	if (isScreenSizeAbove('sm')) {//pc
		return (
			<Box>
				<RecipeVideo videoUrl={recipe.videoUrl} />
				<Box sx={{ paddingX: 1 }}>
					<RecipeHeading>{recipe.title}</RecipeHeading>
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
					<RecipeHeading>{recipe.title}</RecipeHeading>
				</Box>
				<RecipeVideo videoUrl={recipe.videoUrl} />
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
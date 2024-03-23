'use client'
import { Box } from "@mui/material";
import RecipeVideo from "./recipeVideo";
import { NextPage } from "next";
import { RecipeHeading, RecipeFlowHeading } from "@/ui/text/title";
import RecipeFlow from "./recipeFlow";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import Divider from '@mui/material/Divider';
import { MainContentText } from "@/ui/text/content";
import { RecipeType, TagType } from "@/types/data";
import CategoryTags from "../widget/categoryTags";
import { COMMON_CRUMBS } from "@/constant/preset";
type RecipeGroupProps = {
	recipe:RecipeType | null,
	recipeTags:TagType[] | null
}
const RecipeGroup: NextPage<RecipeGroupProps> = ({ recipe,recipeTags }) => {
	const isScreenSizeAboveSm = useIsScreenSizeAbove('sm')
	if(!recipe) return <>NotFound.</>
	if (isScreenSizeAboveSm) {//pc
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
					{recipeTags && (
						<CategoryTags category={recipeTags} headingText={COMMON_CRUMBS.TAG.name} />
					)}
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
					{recipeTags && (
						<CategoryTags category={recipeTags} headingText={COMMON_CRUMBS.TAG.name}  />
					)}
					<Divider sx={{ paddingY: 2 }} />
				</Box>
			</Box>
		)
	}
}
export default RecipeGroup;
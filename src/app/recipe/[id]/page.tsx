import { GetRecipeIdList, GetTagByRecipeUid } from "@/constant/preset";
import { NextPage } from "next";
import { ssgGetFetch } from "@/util/ssgFetch";
import RecipeGroup from "@/component/content/recipeGroup";
import { GetRecipeDetail } from "@/constant/preset";
import { RecipeType, TagType } from "@/types/data";
type RecipeProps = {
	params: {
		id: string
	}
}

const Recipe: NextPage<RecipeProps> = async (props) => {
	const recipeUid =  props.params.id;
	const recipe = await ssgGetFetch<RecipeType>(GetRecipeDetail + recipeUid);
	const recipeTags = await ssgGetFetch<TagType[]>(GetTagByRecipeUid + recipeUid);
	return (
		<>
				<RecipeGroup recipe={recipe} recipeTags={recipeTags}  />
		</>
	)
}
export default Recipe;

type getRecipeIdListType = {
	uid:string
}

export const generateStaticParams = async () => {
	 const recipeIdList = await ssgGetFetch<getRecipeIdListType[]>(GetRecipeIdList);
	return await recipeIdList.map((recipe) => ({
		id: recipe.uid.toString()
	}));
}
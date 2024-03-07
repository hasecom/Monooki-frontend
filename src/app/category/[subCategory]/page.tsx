import {  GetRecipeIdList } from "@/constant/preset";
import { NextPage } from "next";
import { getRecipe, getRecipeIdList } from "@/util/ssgFetch";
import RecipeGroup from "@/component/content/recipeGroup";
import { GetRecipeDetail } from "@/constant/preset";

type CategoryProps = {
	params: {
		attribute:string
	}
}
const CategoryName: NextPage<CategoryProps> = async (props) => {
	return (
		<>
				l
		</>
	)
}
export default CategoryName;

export const generateStaticParams = async () => {
	const recipeIdList = await getRecipeIdList<string>(GetRecipeIdList);
 return await recipeIdList.map((recipe) => ({
	 id: recipe.uid.toString()
 }));
}
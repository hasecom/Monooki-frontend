import { GetRecipeIdList } from "@/constant/preset";
import { NextPage } from "next";
import { getRecipe,getRecipeIdList } from "@/util/getRecipe";
import RecipeGroup from "@/component/content/recipeGroup";
import { GetRecipeDetail } from "@/constant/preset";
type RecipeProps = {
	params: {
		id: string
	}
}
const Recipe: NextPage<RecipeProps> = async (props) => {
	const url = GetRecipeDetail + props.params.id;
	const { recipe } = await getRecipe<string>(url);
	return (
		<>
				<RecipeGroup recipe={recipe} />
		</>
	)
}
export default Recipe;

export const generateStaticParams = async () => {
	 const recipeIdList = await getRecipeIdList<string>(GetRecipeIdList);
	return await recipeIdList.map((recipe) => ({
		id: recipe.uid.toString()
	}));
}
import { recipes } from "@/constant/preset";
import { NextPage } from "next";
import { getRecipe } from "@/util/getRecipe";
import RecipeGroup from "@/component/content/recipeGroup";
import useFetchData from "@/hooks/fetch";
import { RecipeType,ContentType } from "@/types/data";
import { GetRecipeDetail } from "@/constant/preset";
type RecipeProps = {
	params: {
		id: string
	}
}
const Recipe: NextPage<RecipeProps> = async (props) => {
	const url = GetRecipeDetail + props.params.id;
	const { recipe } = await getRecipe<string>(url);
	console.log(recipe)
	return (
		<>
				<RecipeGroup recipe={recipe} />
		</>
	)
}
export default Recipe;

export const generateStaticParams = async () => {
	return await recipes.map((recipe) => ({
		id: recipe.id.toString()
	}));

}
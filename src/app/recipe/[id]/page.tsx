import { recipes } from "@/constant/preset";
import { NextPage } from "next";
import { getRecipe } from "@/util/getRecipe";
import RecipeGroup from "@/component/content/recipeGroup";

type RecipeProps = {
	params: {
		id: string
	}
}
const Recipe: NextPage<RecipeProps> = async (props) => {
	const { recipe } = await getRecipe(props.params.id);
	return (
		<>
				<RecipeGroup recipe={recipe} />
				{/* {recipe.map(({ name }, i) => (
					<>{name}</> 
				))} */}
				{props.params.id}
		</>
	)
}
export default Recipe;

export const generateStaticParams = async () => {
	return await recipes.map((recipe) => ({
		id: recipe.id.toString()
	}));

}
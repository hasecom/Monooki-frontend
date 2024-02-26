import { recipes } from "@/constant/preset";
import { NextPage } from "next";
import { getRecipe } from "@/util/getRecipe";
type RecipeProps = {
	params:{
		id:string
	}
}
const Recipe:NextPage<RecipeProps> = async(props) => {
	const { recipes }  = await getRecipe(props.params.id);
	return (
		<>
		  {recipes.map(({ name }, i) => (
					<>{name}</>
        ))}
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
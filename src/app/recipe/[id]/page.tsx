import { recipes } from "@/constant/preset";
import { NextPage } from "next";

type RecipeProps = {
	params:{
		id:string
	}
}

export async function getRecipe() {
   const res = await fetch("https://raw.githubusercontent.com/hasecom/test-md/main/3.json");
  return res.json();
}

const Recipe:NextPage<RecipeProps> = async(props) => {
	const { results } = await getRecipe();

	return (
		<>
		     {results.map(({ name }, i) => (
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
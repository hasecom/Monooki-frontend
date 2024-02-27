import { getRecipeProps } from "@/types/common";
export const getRecipe = async<T,>(id:T):Promise<getRecipeProps> => {
	const res = await fetch(`https://raw.githubusercontent.com/hasecom/test-md/main/recipes/${id}.json`);
	return await res.json();
}


import { RecipeType } from "@/types/data";

export type getRecipeProps = {
	recipe:RecipeType
}
export const getRecipe = async<T,>(id:T):Promise<getRecipeProps> => {
	const url = process.env.NEXT_PUBLIC_API_URL;
	if(!url) return Promise.reject(new Error("API URL is not defined"));
	const res = await fetch(url + id);
	return {recipe:await res.json()};
}
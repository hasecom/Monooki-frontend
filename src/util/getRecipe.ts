import { CategoryType, RecipeType } from "@/types/data";


export type getRecipeProps = {
	recipe:RecipeType
}
export const getRecipe = async<T,>(id:T):Promise<getRecipeProps> => {
	const url = process.env.NEXT_PUBLIC_API_URL;
	if(!url) return Promise.reject(new Error("API URL is not defined"));
	const res = await fetch(url + id);
	return {recipe:await res.json()};
}
export type getRecipeIdListType = {
	uid:string
}
export const getRecipeIdList = async<T,>(id:T):Promise<getRecipeIdListType[]> => {
	const url = process.env.NEXT_PUBLIC_API_URL;
	if(!url) return Promise.reject(new Error("API URL is not defined"));
	const res = await fetch(url + id);
	return res.json();
}

export type getRecipeTitleListType = {
	title:string
}
export const getRecipeTitleList = async(endPoint:string):Promise<CategoryType[]> => {
	const url = process.env.NEXT_PUBLIC_API_URL;
	if(!url) return Promise.reject(new Error("API URL is not defined"));
	const res = await fetch(url + endPoint);
	return res.json();
}
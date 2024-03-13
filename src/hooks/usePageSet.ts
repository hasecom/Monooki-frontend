import { GetPartCategoryEndPoint, GetRecipeDetail, PAGES, GetCategoryByRecipeUid } from "@/constant/preset"
import { CategoryType, RecipeType } from "@/types/data";
import axios, { AxiosResponse } from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const usePageSet = () => {
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	const splitPathNameArray = (constantPathName: string): string[] => { return constantPathName.split('/') }
	const [categoryData, setCategoryData] = useState<CategoryType[] | null>();
	const [recipeViewData, setRecipeViewData] = useState<RecipeType | null>();
	const [recipeViewCategory, setRecipeViewCategory] = useState<CategoryType[] | null>();

		useEffect(() => {
			const mounted = async () => {
				//カテゴリマップスページ
				if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE).length
					&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE)[1]) {
					const category = spilitRequestPathNameArray[2];
					const fetchResult = await fetchData<CategoryType[]>(GetPartCategoryEndPoint + category);
					setCategoryData(fetchResult);
					//カテゴリページ
				} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE).length
					&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE)[1]) {
					//レシピ
				} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.RECIPE_PAGE).length
					&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.RECIPE_PAGE)[1]) {
					const recipeUid = spilitRequestPathNameArray[2];
					const fetchRecipeResult = await fetchData<RecipeType>(GetRecipeDetail + recipeUid + '/');
					setRecipeViewData(fetchRecipeResult);
					const fetchCategoryResult = await fetchData<CategoryType[]>(GetCategoryByRecipeUid + recipeUid + '/');
					setRecipeViewCategory(fetchCategoryResult);
				}
			}
			mounted();
		}, [])

	return { categoryData, recipeViewData, recipeViewCategory }
}
export default usePageSet;

const fetchData = async<T,>(endpoint: string): Promise<T | null> => {
	try {
		const response: AxiosResponse<T> = await axios.get(process.env.NEXT_PUBLIC_API_URL + endpoint);
		return response.data;
	} catch (error) {
		return null;
	}
}

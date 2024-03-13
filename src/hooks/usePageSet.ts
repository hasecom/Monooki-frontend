import { GetPartCategoryEndPoint, GetRecipeDetail, PAGES, GetCategoryByRecipeUid } from "@/constant/preset"
import { usePresetContext } from "@/provider/preSetProvider";
import { CategoryType, RecipeType } from "@/types/data";
import axios, { AxiosResponse } from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import getCurrentLocation from "@/util/getCurrentLocation";
const usePageSet = () => {
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	const splitPathNameArray = (constantPathName: string): string[] => { return constantPathName.split('/') }
	const [categoryData, setCategoryData] = useState<CategoryType[] | null>();
	const [recipeViewData, setRecipeViewData] = useState<RecipeType | null>();
	const [recipeViewCategory, setRecipeViewCategory] = useState<CategoryType[] | null>();
	const { category, tag } = usePresetContext();
	useEffect(() => {
		const mounted = async () => {
			//カテゴリマップスページ
			if (getCurrentLocation(pathname) == PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE) {
				const categoryAttribute = spilitRequestPathNameArray[2];
				if (category.loading) return;
				const categoryItem = (category.data)?.filter(item => item.attribute == categoryAttribute)
				setCategoryData(categoryItem);
				//カテゴリページ
			} else if (getCurrentLocation(pathname) == PAGES.CATEGORY_LIST_PAGE) {
				//レシピ
			} else if (getCurrentLocation(pathname) == PAGES.RECIPE_PAGE) {
				const recipeUid = spilitRequestPathNameArray[2];
				const fetchRecipeResult = await fetchData<RecipeType>(GetRecipeDetail + recipeUid + '/');
				setRecipeViewData(fetchRecipeResult);
				const fetchCategoryResult = await fetchData<CategoryType[]>(GetCategoryByRecipeUid + recipeUid + '/');
				setRecipeViewCategory(fetchCategoryResult);
			}
		}
		mounted();
	}, [category])

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

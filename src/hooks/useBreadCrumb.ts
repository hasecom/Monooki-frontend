
import { COMMON_CRUMBS, GetPartCategoryEndPoint,GetRecipeDetail, PAGES } from "@/constant/preset"

import { CategoryType,RecipeType } from "@/types/data";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { usePathname } from "next/navigation";
import { breadCrumbValueType } from "@/types/common";
const useBreadCrumb = () => {
	const initbreadCrumbValue = [
		COMMON_CRUMBS.HOME
	]
	const [breadCrumbValue,setBreadCrumbValue] = useState(initbreadCrumbValue);
	const addCurrentLocation = ({newBreadcrumbItems}:{newBreadcrumbItems:breadCrumbValueType[]}) => {
		const newBreadCrumbValue = [...initbreadCrumbValue, ...newBreadcrumbItems];
		setBreadCrumbValue(newBreadCrumbValue);
	}
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	const splitPathNameArray = (constantPathName: string): string[] => { return constantPathName.split('/') }

	useEffect(() => {
		(async () => {
			//カテゴリ詳細
			if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE).length
			 && spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE)[1]) {
				const category = spilitRequestPathNameArray[2];
				const fetchResult = await fetchData<CategoryType[]>(GetPartCategoryEndPoint+category);
				if(!fetchResult || fetchResult.length == 0) return;
				const [categoryList] = fetchResult;
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY,{name: categoryList.name,path: categoryList.attribute,isLink: false}
				];
				addCurrentLocation({newBreadcrumbItems:breadcrumbItems})
				//詳細ページ
			} else if(spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE).length 
			&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE)[1]) {
				const breadcrumbItems: breadCrumbValueType[] = [COMMON_CRUMBS.CATEGORY];
				addCurrentLocation({newBreadcrumbItems:breadcrumbItems})
			//レシピ
			}else if(spilitRequestPathNameArray.length == splitPathNameArray(PAGES.RECIPE_PAGE).length 
			&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.RECIPE_PAGE)[1]) {
				const recipeUid = spilitRequestPathNameArray[2];
				const fetchResult = await fetchData<RecipeType>(GetRecipeDetail+recipeUid+'/');
				if(!fetchResult ) return;
				const recipe = fetchResult;
				console.log(recipe)
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY,{name: recipe.title,path: recipe.uid,isLink: false}
				];
				addCurrentLocation({newBreadcrumbItems:breadcrumbItems})
			}
		})();
	}, []);
	return {breadCrumbValue}
}
export default useBreadCrumb;

const fetchData = async<T,>(endpoint:string):Promise<T | null> => {
	try {
		const response: AxiosResponse<T> = await axios.get(process.env.NEXT_PUBLIC_API_URL + endpoint);
		return response.data;
	} catch (error) {
		return null;
	}
};

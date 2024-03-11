
import { GetAllCategoryEndPoint, GetPartCategoryEndPoint, PAGES } from "@/constant/preset"
import useFetchData from "@/hooks/fetch";
import { CategoryType } from "@/types/data";
import { useEffect } from "react";
import { ssgGetFetch } from "./ssgFetch";
export const setBreadCrumb = async(pathname:string) => {
	
		const spilitRequestPathNameArray = pathname.split('/');
		const splitPathNameArray = (constantPathName:string):string[] => { return constantPathName.split('/')}
		if(spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE).length && spilitRequestPathNameArray.length == 3){
			const category = spilitRequestPathNameArray[2];
			const [categoryList] = await ssgGetFetch<CategoryType[]>(GetPartCategoryEndPoint + category);
			console.log(categoryList);
		}else{
			console.log("違います")
		}
		


}

const categoryPage = ({spilitRequestPathNameArray,splitPathNameArray}:any) => {
	/**
	 * カテゴリ-レシピマップページ
	 *  */ 

}
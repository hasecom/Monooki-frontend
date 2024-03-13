import { PAGES } from "@/constant/preset";

const getCurrentLocation = (pathname: string): string => {
	const spilitRequestPathNameArray = pathname.split('/');
	const splitPathNameArray = (constantPathName: string): string[] => { return constantPathName.split('/') }

	if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE).length
		&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE)[1]) {
		return PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE;
		//カテゴリページ
	} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE).length
		&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE)[1]) {
		return PAGES.CATEGORY_LIST_PAGE;
		//レシピ
	} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.RECIPE_PAGE).length
		&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.RECIPE_PAGE)[1]) {
		return PAGES.RECIPE_PAGE
	} else {
		return ''
	}
}
export default getCurrentLocation;
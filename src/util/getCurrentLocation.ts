import { PAGES } from "@/constant/preset";

const getCurrentLocation = (pathname: string): string => {
	const spilitRequestPathNameArray = pathname.split('/');
	const splitPathNameArray = (constantPathName: string): string[] => { return constantPathName.split('/') }

	if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE).length
		&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE)[1]) {//カテゴリレシピページ
		return PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE;
	} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE).length
		&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE)[1]) {//カテゴリページ
		return PAGES.CATEGORY_LIST_PAGE;
	} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.RECIPE_PAGE).length
		&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.RECIPE_PAGE)[1]) {//レシピ
		return PAGES.RECIPE_PAGE
	} else if(spilitRequestPathNameArray.length == splitPathNameArray(PAGES.SINGLE_PAGE).length
	&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.SINGLE_PAGE)[1]) {//固定ページ
		return PAGES.SINGLE_PAGE
	}else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.TAG_RECIPE_MAP_LIST_PAGE).length
	&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.TAG_RECIPE_MAP_LIST_PAGE)[1]) {//タグレシピページ
	return PAGES.TAG_RECIPE_MAP_LIST_PAGE;
	}else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.TAG_LIST_PAGE).length
	&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.TAG_LIST_PAGE)[1]) {//タグページ
	return PAGES.TAG_LIST_PAGE;
	}
	else {
		return ''
	}
}
export default getCurrentLocation;
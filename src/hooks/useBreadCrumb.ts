
import { COMMON_CRUMBS, PAGES } from "@/constant/preset"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { breadCrumbValueType } from "@/types/common";
import usePageSet from "./usePageSet";
import getCurrentLocation from "@/util/getCurrentLocation";
const useBreadCrumb = () => {
	const initbreadCrumbValue = [
		COMMON_CRUMBS.HOME
	]

	const { categoryData, recipeViewData, recipeViewCategory } = usePageSet();
	const [breadCrumbValue, setBreadCrumbValue] = useState<breadCrumbValueType[]>(initbreadCrumbValue);
	const addCurrentLocation = ({ newBreadcrumbItems }: { newBreadcrumbItems: breadCrumbValueType[] }) => {
		const newBreadCrumbValue = [...initbreadCrumbValue, ...newBreadcrumbItems];
		setBreadCrumbValue(newBreadCrumbValue);
	}
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	//カテゴリ詳細
	useEffect(() => {
		try {
			if (getCurrentLocation(pathname) == PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE) {
				if (!categoryData || categoryData.length == 0) throw Error;
				const [categoryList] = categoryData;
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY, { name: categoryList.name, path: categoryList.attribute, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
				//カテゴリページ
			} else if (getCurrentLocation(pathname) == PAGES.CATEGORY_LIST_PAGE) {
				const breadcrumbItems: breadCrumbValueType[] = [COMMON_CRUMBS.CATEGORY];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
				//レシピ
			} else if (getCurrentLocation(pathname) == PAGES.RECIPE_PAGE) {
				const recipeUid = spilitRequestPathNameArray[2];
				if (!recipeViewData) throw new Error;
				const breadCrumbs = (): breadCrumbValueType[] | [] => {
					if (!recipeViewCategory) throw new Error;
					const breadCrumbs: breadCrumbValueType[] = recipeViewCategory
						.slice()
						.sort((a, b) => a.class_name - b.class_name)
						.map(category => ({
							name: category.name,
							path: PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE + category.attribute,
							isLink: true
						}));
					return breadCrumbs;
				}
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY, ...breadCrumbs(),
					{ name: recipeViewData.title, path: recipeViewData.uid, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			}
		} catch (error) { }
	}, [categoryData, recipeViewData, recipeViewCategory])
	return { breadCrumbValue }
}
export default useBreadCrumb;


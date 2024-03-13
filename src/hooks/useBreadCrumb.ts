
import { COMMON_CRUMBS, PAGES } from "@/constant/preset"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { breadCrumbValueType } from "@/types/common";
import usePageSet from "./usePageSet";

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
	const splitPathNameArray = (constantPathName: string): string[] => { return constantPathName.split('/') }
	//カテゴリ詳細
	useEffect(() => {
		try {
			if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE).length
				&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE)[1]) {
				const category = spilitRequestPathNameArray[2];
				if (!categoryData || categoryData.length == 0) throw Error;
				const [categoryList] = categoryData;
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY, { name: categoryList.name, path: categoryList.attribute, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
				//詳細ページ
			} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE).length
				&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.CATEGORY_LIST_PAGE)[1]) {
				const breadcrumbItems: breadCrumbValueType[] = [COMMON_CRUMBS.CATEGORY];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
				//レシピ
			} else if (spilitRequestPathNameArray.length == splitPathNameArray(PAGES.RECIPE_PAGE).length
				&& spilitRequestPathNameArray[1] == splitPathNameArray(PAGES.RECIPE_PAGE)[1]) {
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
		} catch (error) {}
	}, [categoryData, recipeViewData, recipeViewCategory])
	return { breadCrumbValue }
}
export default useBreadCrumb;


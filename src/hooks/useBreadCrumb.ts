
import { COMMON_CRUMBS, PAGES } from "@/constant/preset"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { breadCrumbValueType } from "@/types/common";
import getCurrentLocation from "@/util/getCurrentLocation";
import { usePresetContext } from '@/provider/preSetProvider';
import { CategoryType } from "@/types/data";
const useBreadCrumb = () => {
	const initbreadCrumbValue = [
		COMMON_CRUMBS.HOME
	]
	const { category,tag,recipe,recipeCategory } = usePresetContext();

	const [breadCrumbValue, setBreadCrumbValue] = useState<breadCrumbValueType[]>(initbreadCrumbValue);
	const addCurrentLocation = ({ newBreadcrumbItems }: { newBreadcrumbItems: breadCrumbValueType[] }) => {
		const newBreadCrumbValue = [...initbreadCrumbValue, ...newBreadcrumbItems];
		setBreadCrumbValue(newBreadCrumbValue);
	}
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	
	
	useEffect(() => {
		try {
			if (getCurrentLocation(pathname) == PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE) {//カテゴリ詳細
				if (category?.loading) throw Error;
				const categoryAttribute = spilitRequestPathNameArray[2];
				const categoryItem = (category?.data)?.filter(item => item.attribute == categoryAttribute)
				const [categoryList] = categoryItem as CategoryType[];
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY, { name: categoryList.name, path: categoryList.attribute, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			} else if (getCurrentLocation(pathname) == PAGES.CATEGORY_LIST_PAGE) {//カテゴリページ
				const breadcrumbItems: breadCrumbValueType[] = [COMMON_CRUMBS.CATEGORY];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
				
			} else if (getCurrentLocation(pathname) == PAGES.RECIPE_PAGE) {//レシピ
				if (!recipe?.data) throw new Error;
				const breadCrumbs = (): breadCrumbValueType[] | [] => {
					if (!recipeCategory?.data) throw new Error;
					const breadCrumbs: breadCrumbValueType[] = recipeCategory.data
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
					{ name: recipe.data.title, path: recipe.data.uid, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			}
		} catch (error) { }
	}, [ category,recipe,recipeCategory])
	return { breadCrumbValue }
}
export default useBreadCrumb;


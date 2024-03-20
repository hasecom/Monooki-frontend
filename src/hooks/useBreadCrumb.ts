
import { COMMON_CRUMBS, PAGES, PAGE_NAMES } from "@/constant/preset"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { breadCrumbValueType } from "@/types/common";
import { usePresetContext } from '@/provider/preSetProvider';
import { CategoryType, TagType } from "@/types/data";

const useBreadCrumb = () => {
	const initbreadCrumbValue = [
		COMMON_CRUMBS.HOME
	]
	const { category, tag, recipe, recipeCategory, singleContent,location } = usePresetContext();

	const [breadCrumbValue, setBreadCrumbValue] = useState<breadCrumbValueType[]>(initbreadCrumbValue);
	const addCurrentLocation = ({ newBreadcrumbItems }: { newBreadcrumbItems: breadCrumbValueType[] }) => {
		const newBreadCrumbValue = [...initbreadCrumbValue, ...newBreadcrumbItems];
		setBreadCrumbValue(newBreadCrumbValue);
	}
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');


	useEffect(() => {
		try {
			if (location == PAGE_NAMES.CATEGORY_RECIPE_MAP_LIST_PAGE) {//カテゴリ詳細
				if (category?.loading) throw Error;
				const categoryAttribute = spilitRequestPathNameArray[2];
				const categoryItem = (category?.data)?.filter(item => item.attribute == categoryAttribute)
				const [categoryList] = categoryItem as CategoryType[];
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.CATEGORY, { name: categoryList.name, path: categoryList.attribute, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			} else if (location == PAGE_NAMES.CATEGORY_LIST_PAGE) {//カテゴリページ
				const breadcrumbItems: breadCrumbValueType[] = [COMMON_CRUMBS.CATEGORY];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			} else if (location == PAGE_NAMES.RECIPE_PAGE) {//レシピ
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
			}else if(location == PAGE_NAMES.SINGLE_PAGE){
				if (!singleContent?.data) throw new Error;
				const [viewSingleContent] = singleContent.data.filter(content=>content.attribute == spilitRequestPathNameArray[2]);
				const breadcrumbItems: breadCrumbValueType[] = [
				 { name:viewSingleContent.title as string, path: viewSingleContent.attribute, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			}else	if (location == PAGE_NAMES.TAG_RECIPE_MAP_LIST_PAGE) {//タグ詳細
				if (tag?.loading) throw Error;
				const tagAttribute = spilitRequestPathNameArray[2];
				const tagItem = (tag?.data)?.filter(item => item.attribute == tagAttribute)
				const [tagList] = tagItem as TagType[];
				const breadcrumbItems: breadCrumbValueType[] = [
					COMMON_CRUMBS.TAG, { name: tagList.name, path: tagList.attribute, isLink: false }
				];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			}else if (location == PAGE_NAMES.TAG_LIST_PAGE) {//タグページ
				const breadcrumbItems: breadCrumbValueType[] = [COMMON_CRUMBS.TAG];
				addCurrentLocation({ newBreadcrumbItems: breadcrumbItems })
			} 
		} catch (error) { }
	}, [ category, tag, recipe, recipeCategory, singleContent ])
	return { breadCrumbValue }
}
export default useBreadCrumb;


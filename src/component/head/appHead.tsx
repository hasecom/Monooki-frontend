import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { usePresetContext } from '@/provider/preSetProvider';
import {PAGE_NAMES, Service } from "@/constant/preset";
import { CategoryType, TagType } from "@/types/data";
const AppHead = () => {

	const { category, tag, recipe, singleContent,location } = usePresetContext();
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	const [ogp, setOgp] = useState({
		title: "MONOOKI",
		description: "モノ・コトを動画で紹介するサービスです。",
		image: ""
	});
	useEffect(() => {
		if(location == "") return;
		try {
			if(location == PAGE_NAMES.HOME_PAGE){
				setOgp(prevState => ({
					...prevState,
					title: "MONOOKI",
				}));
			}else if (location == PAGE_NAMES.CATEGORY_RECIPE_MAP_LIST_PAGE) {//カテゴリ詳細
				if (category?.loading) throw Error;
				const categoryAttribute = spilitRequestPathNameArray[2];
				const categoryItem = (category?.data)?.filter(item => item.attribute == categoryAttribute)
				const [categoryList] = categoryItem as CategoryType[];
				setOgp(prevState => ({
					...prevState,
					title: category?.data ? categoryList?.name + 'を含むカテゴリ一覧　|　' + Service.ServiceNameEn : "カテゴリ一覧　|　" + Service.ServiceNameEn
				}));
			} else if (location == PAGE_NAMES.CATEGORY_LIST_PAGE) {//カテゴリページ
				setOgp(prevState => ({
					...prevState,
					title: 'カテゴリ一覧　|　' + Service.ServiceNameEn
				}));
			} else if (location == PAGE_NAMES.RECIPE_PAGE) {//レシピ
				if (!recipe?.data) throw new Error;
				setOgp(prevState => ({
					...prevState,
					title: recipe?.data ? recipe.data.title + '　|　' + Service.ServiceNameEn : Service.ServiceNameEn,
					description:recipe?.data ? recipe.data.introduction : prevState.description,
					image:recipe?.data ? recipe.data.thumbnailUrl : prevState.image
				}));
			} else if (location == PAGE_NAMES.SINGLE_PAGE) {
				if (!singleContent?.data) throw new Error;
				const [viewSingleContent] = singleContent.data.filter(content => content.attribute == spilitRequestPathNameArray[2]);
				setOgp(prevState => ({
					...prevState,
					title: viewSingleContent ? viewSingleContent.title + '　|　' + Service.ServiceNameEn : Service.ServiceNameEn
				}));
			} else if (location == PAGE_NAMES.TAG_LIST_PAGE) {//タグページ
				setOgp(prevState => ({
					...prevState,
					title: 'タグ一覧　|　' + Service.ServiceNameEn
				}));
			} else if (location == PAGE_NAMES.TAG_RECIPE_MAP_LIST_PAGE) {//タグ詳細
				if (tag?.loading) throw Error;
				const tagAttribute = spilitRequestPathNameArray[2];
				const tagItem = (tag?.data)?.filter(item => item.attribute == tagAttribute)
				const [tagList] = tagItem as TagType[];
				setOgp(prevState => ({
					...prevState,
					title: tagList ? tagList.name + 'を含むタグ一覧　|　' + Service.ServiceNameEn : "タグ一覧　|　" + Service.ServiceNameEn
				}));
			}else{
				setOgp(prevState => ({
					title: "MONOOKI",
					description: "モノ・コトを動画で紹介するサービスです。",
					image: ""
				}));
			}
		} catch (error) { }

	}, [category, tag, recipe, singleContent,])

	return (
		<>
			<title>{ogp.title}</title>
			<meta property="og:title" content={ogp.title} />
			<meta property="og:site_name" content={ogp.title} />
			<meta property="og:description" content={ogp.description} />
			<meta property="og:image" content={ogp.image ? ogp.image : ""} />
			<meta name="robots" content="index, follow" />
		</>
	)
}

export default AppHead;
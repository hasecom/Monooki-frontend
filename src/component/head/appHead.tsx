import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { usePresetContext } from '@/provider/preSetProvider';
import { PAGE_NAMES, Service,assetLinks } from "@/constant/preset";
import { CategoryType, TagType } from "@/types/data";
const AppHead = () => {

	const { category, tag, recipe, singleContent, location } = usePresetContext();
	const pathname = usePathname();
	const spilitRequestPathNameArray = pathname.split('/');
	const [ogp, setOgp] = useState({
		title: "MONOOKI",
		description: "モノ・コトを動画で紹介するサービスです。",
		image: ""
	});
	useEffect(() => {
		if (location == "") return;
		try {
			if (location == PAGE_NAMES.HOME_PAGE) {
				setOgp(prevState => ({
					...prevState,
					title: "MONOOKI",
				}));
			} else if (location == PAGE_NAMES.CATEGORY_RECIPE_MAP_LIST_PAGE) {//カテゴリ詳細
				if (category?.loading) throw Error;
				const categoryAttribute = spilitRequestPathNameArray[2];
				const categoryItem = (category?.data)?.filter(item => item.attribute == categoryAttribute)
				const [categoryList] = categoryItem as CategoryType[];
				setOgp(prevState => ({
					...prevState,
					title: category?.data ? categoryList?.name + 'を含むカテゴリ一覧　|　' + Service.ServiceNameEn : "カテゴリ一覧　|　" + Service.ServiceNameEn,
					description:categoryList?.name + 'を含むカテゴリの動画ページ一覧です。'
				}));
			} else if (location == PAGE_NAMES.CATEGORY_LIST_PAGE) {//カテゴリページ
				setOgp(prevState => ({
					...prevState,
					title: 'カテゴリ一覧　|　' + Service.ServiceNameEn,
					description:'カテゴリ一覧ページです。見つけたい動画に合うカテゴリを選びましょう。'
				}));
			} else if (location == PAGE_NAMES.RECIPE_PAGE) {//レシピ
				if (!recipe?.data) throw new Error;
				setOgp(prevState => ({
					...prevState,
					title: recipe?.data ? recipe.data.title + '　|　' + Service.ServiceNameEn : Service.ServiceNameEn,
					description: recipe?.data ? recipe.data.introduction : prevState.description,
					image: recipe?.data ? recipe.data.thumbnailUrl : prevState.image
				}));
			} else if (location == PAGE_NAMES.SINGLE_PAGE) {//シングルページ
				if (!singleContent?.data) throw new Error;
				const [viewSingleContent] = singleContent.data.filter(content => content.attribute == spilitRequestPathNameArray[2]);
				setOgp(prevState => ({
					...prevState,
					title: viewSingleContent ? viewSingleContent.title + '　|　' + Service.ServiceNameEn : Service.ServiceNameEn,
					description:viewSingleContent?.description  ? viewSingleContent.description :""
				}));
			} else if (location == PAGE_NAMES.TAG_LIST_PAGE) {//タグページ
				setOgp(prevState => ({
					...prevState,
					title: 'タグ一覧　|　' + Service.ServiceNameEn,
					description:'タグ一覧ページです。見つけたい動画に合うタグを選びましょう。'
				}));
			} else if (location == PAGE_NAMES.TAG_RECIPE_MAP_LIST_PAGE) {//タグ詳細
				if (tag?.loading) throw Error;
				const tagAttribute = spilitRequestPathNameArray[2];
				const tagItem = (tag?.data)?.filter(item => item.attribute == tagAttribute)
				const [tagList] = tagItem as TagType[];
				setOgp(prevState => ({
					...prevState,
					title: tagList ? tagList.name + 'を含むタグ一覧　|　' + Service.ServiceNameEn : "タグ一覧　|　" + Service.ServiceNameEn,
					description:tagList?.name + 'を含むタグの動画ページ一覧です。'
				}));
			} else {
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
			<meta property="og:image" content={ogp.image ? ogp.image : assetLinks.ogImage} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={ogp.title} />
			<meta name="twitter:description" content={ogp.description} />
			<meta name="twitter:image" content={ogp.image ? ogp.image : assetLinks.ogImage} />
			<meta name="robots" content="index, follow" />
			<link rel="apple-touch-icon" sizes="180x180" href="fav/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="fav/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="fav/favicon-16x16.png" />
			<link rel="manifest" href="fav/site.webmanifest" />
			<link rel="mask-icon" href="fav/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</>
	)
}

export default AppHead;
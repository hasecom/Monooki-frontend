export const Heading = {
	Category:{
		CategorySearch:"カテゴリから探す",
		PurposeSearch:"タグから探す"
	},
	Common:{
		AboutService:"サービスについて"
	},
	Footer:{
		CategoryList:"カテゴリ一覧",
		AboutService:"サービスについて"
	}
}

export const credit = '© 2024 MONOOKI All rights reserved.'


/*
API エンドポイント
*/
/**
 * カテゴリー全取得
*/
export const GetAllCategoryEndPoint = 'monooki/get/category/'
/**
 * カテゴリー特定取得（?attribute=attribute_name)
*/
export const GetPartCategoryEndPoint = 'monooki/get/category/?attribute=';
/**
 * タグ全取得
*/
export const GetAllTagEndPoint = 'monooki/get/tag/'

/**
 * レシピ詳細取得(+recipe_uid)
*/
export const GetRecipeDetail = 'monooki/get/recipe/'
/**
 * レシピ詳細取得(カテゴリ)
*/
export const GetRecipeDetailByCategory = 'monooki/get/recipeCategoryMap/?id='
/**
 * レシピIDリスト取得
 */
export const GetRecipeIdList = 'monooki/get/recipeid/'
/**
 * レシピUidから所属カテゴリーを取得 (+Uid) 
 */
export const GetCategoryByRecipeUid = 'monooki/get/categoryByRecipeUid/'
/**
 * シングルページ（固定）を全取得
 */
export const GetSingleContentAll = 'monooki/get/singleContentAll/'
export const PAGES = {
	HOME_PAGE:"/",
	CATEGORY_LIST_PAGE:"/category",
	CATEGORY_RECIPE_MAP_LIST_PAGE:"/category/",//category/category_attribute
	RECIPE_PAGE:'/recipe/',//recipe/recipe_uid
	SINGLE_PAGE:'/single/'
}


/**
* 種類
/**
 * @namespace
 * @property {object}  TYPES -設定値
 * @property {number}  TYPES.CATEGORY.CATEGORY_MAIN_CATEGORY -大カテゴリ
 * @property {number}  CATEGORY.CATEGORY_SUB_CATEGORY -中カテゴリ
 * @property {number}  CATEGORY.CATEGORY_SUB_SUB_CATEGORY -小カテゴリ
 * @property {number}  TAG.TAG_PROPER_NOUN -固有名詞
 * @property {number}  TAG.NOUN -名詞
 * @property {number}  TAG.VERB -動詞
 * @property {number}  TAG.ADJECTIVE -形容詞
 */
export const TYPES = {
	CATEGORY:{
		CATEGORY_MAIN_CATEGORY:1,
		CATEGORY_SUB_CATEGORY:2,
		CATEGORY_SUB_SUB_CATEGORY:3
	},
	TAG:{
		TAG_PROPER_NOUN:1,
		TAG_NOUN:2,
		TAG_PVERB:3,
		TAG_PADJECTIVE:4
	}
}


export const COMMON_CRUMBS = {
	HOME:{
		name:'ホーム',
		path:PAGES.HOME_PAGE,
		isLink:true
	},
	CATEGORY:{
		name: "カテゴリ",
		path:PAGES.CATEGORY_LIST_PAGE,
		isLink: true
	}	
}

export const footerCategoryLinks = [
	{
		label:'カテゴリから探す',
		link:PAGES.CATEGORY_LIST_PAGE
	},
	{
		label:'目的から探す',
		link:''
	}
]
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

export const categoryContents = [
	{ name: 'LINE' },
	{ name: 'X' },
	{ name: 'Youtube' },
	{ name: 'Instagram' },
	{ name: 'スマホ' },
	{ name: 'PC' }
]
export const purposeContents = [
	{name:'アプリが起動しないよおおおお'},
	{name:'退会したい'},
	{name:'会員登録したい'},
	{name:'スマホが起動しない'}
]
export const recipes = [
	{id:4},
	{id:1000},
	{id:2000},
	{id:3000},
	{id:4000},
]

export const constantLink = [
	{id:1,label:'プライバシーポリシー'},
	{id:2,label:'利用規約'},
	{id:3,label:'運営'},
	{id:4,label:'サービスに関してのお問い合わせ'},
]
export const footerCategoryLinks = [
	{
		label:'カテゴリから探す',
		link:''
	},
	{
		label:'目的から探す',
		link:''
	}
]
export const credit = '© 2024 MONOOKI All rights reserved.'


/*
API エンドポイント
*/
//カテゴリー全取得
export const GetAllCategoryEndPoint = 'monooki/get/category/'
export const GetAllTagEndPoint = 'monooki/get/tag/'

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


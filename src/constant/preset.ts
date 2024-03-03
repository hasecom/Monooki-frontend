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

import { ReactNode } from "react"
import { CategoryType,TagType } from "./data"
export type LayoutProps  = {
	children:ReactNode
}
export type mainLayoutOptionType = {
	isBreadCrumbs?:boolean
}
/*
fetch
*/
export interface FetchDataResult<T> {
  data: T | null;
  loading: boolean;
	error: Error | null;
}

/*
レシピ
*/
export type RecipeType = {
	id:string,
	name:string,
	introduction:string,
	content:RecipeContentType[],
	videoUrl:string,
	thumbnailUrl:string,
	remark:string

}
export type RecipeContentType = {
	label:string,
	description:string
}
export type getRecipeProps = {
	recipe:RecipeType
}
export type RecipeGroupProps = {
	recipe:RecipeType
}
export type RecipeFlowProps = {
	recipe:RecipeType
}
/*
#######
フッター
#######
*/
export type constantLinkType = {
	id:number,
	label:string
}
export type footerCategoryLinksType = {
	label:string,
	link:string
}
/*
#######
カテゴリ&目的
#######
*/
export type CategoryLinkProps = {
	category:CategoryType[],
	length?:number
}
export type TagLinkProps = {
	category:TagType[],
	length?:number
}
/* 
########
UI
########
*/
export type ReactNodeProp = {children:ReactNode};
export type MainAppBarProps = {
	isOpenSideBar:boolean
}
export type HamburgerButtonProps = {
  isOpenSideBar: boolean,

};

/* 
########
mediaQuery
########
*/
export type MediaQueryBreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MediaQueryDirection = 'up' | 'down' | 'only';
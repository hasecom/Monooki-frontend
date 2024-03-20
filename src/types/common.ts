import { ReactNode } from "react"
import { CategoryType,TagType,RecipeType } from "./data"
 
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
export type RecipeContentType = {
	label:string,
	description:string
}

/*
#######
フッター
#######
*/
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
	length?:number,
	type?:"category" | "tag"
}
export type TagLinkProps = {
	category:TagType[],
	length?:number,
	type?:"category" | "tag"
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

/** 
* @namespace breadCrumbMenu
* @property  
*/
export type breadCrumbValueType = {
	name:string,
	path:string,
	isLink:boolean
}
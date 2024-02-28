import { ReactNode } from "react"

export type LayoutProps  = {
	children:ReactNode
}
export type mainLayoutOptionType = {
	isBreadCrumbs?:boolean
}
/*
レシピ
*/
export type RecipeType = {
	id:string,
	name:string,
	content:RecipeContentType[],
	videoUrl:string,
	thumbnailUrl:string
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
カテゴリ&目的
#######
*/
export type categoryType = {
	name:string
}
export type categoryLinkProps = {
	category:categoryType[],
	length?:number
}
export type CategoryListProps = {
	category:categoryType[]
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
export type SideDrawerProps = {
	isOpen:boolean,
	toggle:()=>void
}
/* 
########
mediaQuery
########
*/
export type MediaQueryBreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MediaQueryDirection = 'up' | 'down' | 'only';
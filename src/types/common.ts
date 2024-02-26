import { ReactNode } from "react"

export type LayoutProps  = {
	children:ReactNode
}
/*
レシピ
*/
export type RecipesType = {
	id:string,
	name:string,
	content:string[],
	videoUrl:string,
	thumbnailUrl:string
}
export type getRecipeProps = {
	recipes:RecipesType[]
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
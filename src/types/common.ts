import { ReactNode } from "react"

export type LayoutProps  = {
	children:ReactNode
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
  // relevantEvent?: () => void;
  isOpenSideBar: boolean;
};

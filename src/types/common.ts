import { ReactNode } from "react"

export type LayoutProps  = {
	children:ReactNode
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

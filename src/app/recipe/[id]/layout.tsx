'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import MainLayout from "@/layout/mainLayout";
import BasicBreadCrumbs from "@/ui/Breadcrumbs/basicBreadCrumbs";
const RecipeLayout: NextPage<LayoutProps> = ({ children }) => {
	return (
		<>
			<MainLayout>
				{children}
			</MainLayout>
		</>
	)
}
export default RecipeLayout;
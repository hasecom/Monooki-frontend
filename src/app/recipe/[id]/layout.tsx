'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import MainLayout from "@/layout/mainLayout";
import TopList from "@/component/widget/topList";
import CategoryTabs from "@/component/widget/categoryTabs";

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
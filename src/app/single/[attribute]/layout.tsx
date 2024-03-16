'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import MainLayout from "@/layout/mainLayout";
const SingleContentLayout: NextPage<LayoutProps> = ({ children }) => {
	return (
		<>
			<MainLayout>
				{children}
			</MainLayout>
		</>
	)
}
export default SingleContentLayout;
'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import MainLayout from "@/layout/mainLayout";
import { usePresetContext } from "@/provider/preSetProvider";
import { useEffect } from "react";
import { PAGE_NAMES } from "@/constant/preset";
const SingleContentLayout: NextPage<LayoutProps> = ({ children }) => {
	const { _setLocation } = usePresetContext();
	useEffect(()=>{
		_setLocation(PAGE_NAMES.SINGLE_PAGE)
	},[_setLocation])
	return (
		<>
			<MainLayout>
				{children}
			</MainLayout>
		</>
	)
}
export default SingleContentLayout;
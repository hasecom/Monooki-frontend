'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import MainLayout from "@/layout/mainLayout";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { usePresetContext } from "@/provider/preSetProvider";
import { useEffect } from "react";
import { PAGE_NAMES } from "@/constant/preset";

const TagLayout: NextPage<LayoutProps> = ({ children }) => {
	const { _setLocation } = usePresetContext();
	useEffect(()=>{
		_setLocation(PAGE_NAMES.TAG_RECIPE_MAP_LIST_PAGE)
	},[_setLocation])
	return (
		<>
			<MainLayout>
			<Box sx={{
				maxWidth:'650px',
				margin:'0 auto',
				paddingX:!useIsScreenSizeAbove('md') ? 3:1
			}}>
				{children}
				</Box>
			</MainLayout>
		</>
	)
}
export default TagLayout;
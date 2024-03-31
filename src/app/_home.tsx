'use client'
import MainLayout from "@/layout/mainLayout";
import TopList from "@/component/widget/topList";
import CategoryTabs from "@/component/widget/categoryTabs";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { usePresetContext } from "@/provider/preSetProvider";
import { useEffect } from "react";
import { PAGE_NAMES, TYPES } from "@/constant/preset";

const HomeView = () => {
	const isScreenSizeAboveSm = useIsScreenSizeAbove('sm');
	const { _setLocation } = usePresetContext();
	useEffect(() => {
		_setLocation(PAGE_NAMES.HOME_PAGE)
	}, [_setLocation])
	return (
		<MainLayout isBreadCrumbs={false}>
		<Box sx={isScreenSizeAboveSm ?
			{ paddingX: "3vw", paddingY: "3vh" } :
			{ paddingY: "3vh" }
		}
		>
			<TopList categoryId={TYPES.CATEGORY.CATEGORY_ID.LINE} />
			<CategoryTabs />
		</Box>
	</MainLayout>
	)
}
export default HomeView;
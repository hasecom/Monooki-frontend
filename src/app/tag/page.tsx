'use client'
import MainLayout from "@/layout/mainLayout";
import TagList from "@/component/list/tagList";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { usePresetContext } from "@/provider/preSetProvider";
import { useEffect } from "react";
import { PAGE_NAMES } from "@/constant/preset";
const  Tag = () => {
	const { _setLocation } = usePresetContext();
	useEffect(()=>{
		_setLocation(PAGE_NAMES.TAG_LIST_PAGE)
	},[_setLocation])
  return (
		<MainLayout>
			<Box sx={{
				maxWidth:'650px',
				margin:'0 auto',
				paddingX:!useIsScreenSizeAbove('md') ? 3:1
			}}>
				<TagList />
			</Box>
		</MainLayout>
  );
}
export default Tag;

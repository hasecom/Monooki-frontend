'use client'
import MainLayout from "@/layout/mainLayout";
import CategoryList from "@/component/list/categoryList";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { usePresetContext } from "@/provider/preSetProvider";
import { useEffect } from "react";
import { PAGE_NAMES } from "@/constant/preset";

const  Category = () => {
	const { _setLocation } = usePresetContext();
	useEffect(()=>{
		_setLocation(PAGE_NAMES.CATEGORY_LIST_PAGE)
	},[_setLocation])
  return (
		<MainLayout>
			<Box sx={{
				maxWidth:'650px',
				margin:'0 auto',
				paddingX:!useIsScreenSizeAbove('md') ? 3:1
			}}>
				<CategoryList />
			</Box>
		</MainLayout>
  );
}
export default Category;
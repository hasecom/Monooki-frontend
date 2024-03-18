'use client'
import MainLayout from "@/layout/mainLayout";
import CategoryList from "@/component/list/categoryList";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
const  Category = () => {
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

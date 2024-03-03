'use client'
import MainLayout from "@/layout/mainLayout";
import CategoryList from "@/component/list/categoryList";
import { Box } from "@mui/material";
import { isScreenSizeAbove } from "@/util/mediaQuery";

export default function Home() {
  return (
		<MainLayout>
			<Box sx={{
				maxWidth:'650px',
				margin:'0 auto',
				paddingX:!isScreenSizeAbove('md') ? 3:1
			}}>
				<CategoryList />
			</Box>
		</MainLayout>
  );
}

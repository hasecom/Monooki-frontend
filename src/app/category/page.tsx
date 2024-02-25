'use client'
import MainLayout from "@/layout/mainLayout";
import CategoryList from "@/component/list/categoryList";
import { categoryContents } from "@/constant/preset";
import { Box } from "@mui/material";
export default function Home() {
  return (
		<MainLayout>
			<Box sx={{maxWidth:'650px',margin:'0 auto'}}>
				<CategoryList category={categoryContents} />
			</Box>
		</MainLayout>
  );
}

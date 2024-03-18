'use client'
import MainLayout from "@/layout/mainLayout";
import TagList from "@/component/list/tagList";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
const  Tag = () => {
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

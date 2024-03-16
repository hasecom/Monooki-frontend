'use client'
import MainLayout from "@/layout/mainLayout";
import TagList from "@/component/list/tagList";
import { Box } from "@mui/material";
import { isScreenSizeAbove } from "@/util/mediaQuery";
const  Tag = () => {
  return (
		<MainLayout>
			<Box sx={{
				maxWidth:'650px',
				margin:'0 auto',
				paddingX:!isScreenSizeAbove('md') ? 3:1
			}}>
				<TagList />
			</Box>
		</MainLayout>
  );
}
export default Tag;

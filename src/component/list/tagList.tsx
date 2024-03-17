'use client'
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CategoryAndTagMainTitle, CategoryTitle } from "@/ui/text/title";
import { usePresetContext } from "@/provider/preSetProvider";
import { Box, ListItemButton } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PAGES } from '@/constant/preset';

/**
* @namespace
* - used category page
*/
const TagList = () => {

	const { tag } = usePresetContext();
	const tagData = tag?.data && tag.data;
	if (tag?.loading) return <><Skeleton /></>;
	return (
		<>
				<CategoryAndTagMainTitle>タグ</CategoryAndTagMainTitle>
			<Grid container spacing={0} sx={{ my: 2 }}>
				{(tagData)?.map((tagItem, index) => (
					<Grid item xs={5} md={5}  key={index}>
						<Box>
						<ListItemButton component="a" href={PAGES.TAG_RECIPE_MAP_LIST_PAGE + tagItem.attribute}>
							<CategoryTitle>{tagItem.name}</CategoryTitle>
							</ListItemButton>
						</Box>
					</Grid>
			))}
			</Grid>
		</>
	)
}
export default TagList;

'use client'
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CategoryTitle, CategoryAndTagMainTitle } from "@/ui/text/title";
import { usePresetContext } from "@/provider/preSetProvider";
import { CategoryType } from "@/types/data";
import { PAGES, TYPES } from "@/constant/preset";
import { Fragment } from "react";
import { Box, Typography } from "@mui/material";

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
			<Grid container spacing={0} sx={{ my: 2 }}>
				{(tagData)?.map((tagItem, index) => (
					<Grid item xs={5} md={5}  key={index}>
						<Box>
							<CategoryTitle>{tagItem.name}</CategoryTitle>
						</Box>
					</Grid>
			))}
			</Grid>
		</>
	)
}
export default TagList;

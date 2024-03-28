'use client'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { makeStyles } from '@material-ui/core';
import { Box, Skeleton } from '@mui/material';
import { GetRecipeDetailByCategory, PAGES } from '@/constant/preset';
import useFetchData from '@/hooks/fetch';
import { RecipeType } from '@/types/data';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
const useStyles = makeStyles((theme) => ({
	boldTitle: {
		fontWeight: 'bold',
	},
}));
type TopListProps = {
	categoryId:number
}
const TopList:NextPage<TopListProps> = ({categoryId}) => {
	const router = useRouter();
	const classes = useStyles();
	const { data: recipeData, loading: recipeLoading, error: recipeError } = useFetchData<RecipeType[]>(GetRecipeDetailByCategory + categoryId, false);
	if (recipeLoading || !recipeData) return <>
		<Box sx={{ pt: 0.5 }}><></></Box></>
	return (
		<>
			<Box sx={{
				overflowX: 'scroll',
				scrollbarWidth: 'none',
				msOverflowStyle: 'none',
				'&::-webkit-scrollbar': {
					display: 'none',
				}
			}}>
				<ImageList sx={{ width: 500, height: 300 }}>
					{recipeData.map((recipe, index) => (
						<ImageListItem key={index}>
							<img
								srcSet={`${recipe.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
								src={`${recipe.thumbnailUrl}?w=248&fit=crop&auto=format`}
								alt={recipe.title}
								loading="lazy"
								onClick={() => { router.push(PAGES.RECIPE_PAGE + recipe.uid) }}
							/>
							<ImageListItemBar
								title={recipe.title}
								position="below"
								classes={{ title: classes.boldTitle }}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</>
	)
}
export default TopList;


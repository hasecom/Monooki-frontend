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

const useStyles = makeStyles((theme) => ({
  boldTitle: {
    fontWeight: 'bold',
  },
}));
const TopList = () => {
	const router = useRouter();
	const classes = useStyles();
	const categoryId = 25;

	const {data:recipeData,loading:recipeLoading,error:recipeError } = useFetchData<RecipeType[]>(GetRecipeDetailByCategory+categoryId,false);
	if(recipeLoading || !recipeData) return <>
	      <Box sx={{ pt: 0.5 }}><Skeleton width={110} height={350} /></Box></>
	return (
		<>
		<Box sx={{overflowX:'scroll'}} >
			<ImageList sx={{ width: 500, height: 250}}>
				{recipeData.map((recipe,index) => (
					<ImageListItem key={index}> 
						<img
							srcSet={`${recipe.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${recipe.thumbnailUrl}?w=248&fit=crop&auto=format`}
							alt={recipe.title}
							loading="lazy"
							onClick={()=>{router.push(PAGES.RECIPE_PAGE+recipe.uid)}}
						/>
						<ImageListItemBar
							title={recipe.title}
							position="below"
							classes={{title:classes.boldTitle}}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
		</>
	)
}
export default TopList;

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'LINEのサムネイルの変更の仕方',
		date: '2023年2月12日',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'LINEの音楽の設定方法',
		date: '2022年2月1日',
	}
];
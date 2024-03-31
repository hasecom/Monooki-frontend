'use client'
import * as React from 'react';

import { Box } from '@mui/material';
import { GetRecipeDetailByCategory } from '@/constant/preset';
import useFetchData from '@/hooks/fetch';
import { RecipeType } from '@/types/data';
import { NextPage } from 'next';
import EmblaCarousel from '@/ui/carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { CategoryAndTagMainTitle } from '@/ui/text/title';

type TopListProps = {
	categoryId: number,
	categoryTitle:string
}
const TopList: NextPage<TopListProps> = ({ categoryId,categoryTitle }) => {
	const { data: recipeData, loading: recipeLoading, error: recipeError } = useFetchData<RecipeType[]>(GetRecipeDetailByCategory + categoryId, false);

	const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
	if (recipeLoading || !recipeData) return <><Box sx={{ pt: 0.5 }}><></></Box></>

	return (
		<>
			<Box>
				<Box sx={{ px: 2 }}>
					<CategoryAndTagMainTitle>{categoryTitle}</CategoryAndTagMainTitle>
				</Box>
				<EmblaCarousel slides={recipeData} options={OPTIONS} />
			</Box>
		</>
	)
}
export default TopList;


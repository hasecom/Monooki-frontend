'use client'
import { GetAllCategoryEndPoint,GetAllTagEndPoint, GetCategoryByRecipeUid, GetRecipeDetail } from '@/constant/preset';
import { CategoryType,RecipeType,TagType } from '@/types/data';
import useFetchData from '@/hooks/fetch';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import getCurrentLocation from '@/util/getCurrentLocation';
import { FetchDataResult } from '@/types/common';
import { usePathname } from 'next/navigation';
import { PAGES } from '@/constant/preset';
interface ContextType {
	category?:FetchDataResult<CategoryType[]>,
	tag?:FetchDataResult<TagType[]>,
	recipe?:FetchDataResult<RecipeType>,
	recipeCategory?:FetchDataResult<CategoryType[]>,
}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const PreSetProvider: React.FC<ProviderProps> = ({ children }) => {
//リクエストのあるURL指定
	const {data:categoryData,loading:categoryLoading,error:categoryError } = useFetchData<CategoryType[],null>(GetAllCategoryEndPoint);
	const {data:tagData,loading:tagLoading,error:tagError } = useFetchData<TagType[],null>(GetAllTagEndPoint);
	const {data:recipeData,loading:recipeLoading,error:recipeError } = useFetchData<RecipeType,null>(GetRecipeDetail,[PAGES.RECIPE_PAGE]);
	const {data:recipeCategoryData,loading:recipeCategoryLoading,error:recipeCategoryError } = useFetchData<CategoryType[],RecipeType>(GetCategoryByRecipeUid,[PAGES.RECIPE_PAGE],recipeData);

	const contextValue: ContextType = {
		category:{data:categoryData,loading:categoryLoading,error:categoryError},
		tag:{data:tagData,loading:tagLoading,error:tagError},
		recipe:{data:recipeData,loading:recipeLoading,error:recipeError},
		recipeCategory:{data:recipeCategoryData,loading:recipeCategoryLoading,error:recipeCategoryError},
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const usePresetContext = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { PreSetProvider, usePresetContext };
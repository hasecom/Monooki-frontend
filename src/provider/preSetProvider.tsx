'use client'
import { GetAllCategoryEndPoint,GetAllTagEndPoint, GetCategoryByRecipeUid, GetRecipeDetail,GetSingleContentAll } from '@/constant/preset';
import { CategoryType,RecipeType,TagType,SingleContentType } from '@/types/data';
import useFetchData from '@/hooks/fetch';
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { FetchDataResult } from '@/types/common';
import { PAGE_NAMES } from '@/constant/preset';
interface ContextType {
	category?:FetchDataResult<CategoryType[]>,
	tag?:FetchDataResult<TagType[]>,
	recipe?:FetchDataResult<RecipeType>,
	recipeCategory?:FetchDataResult<CategoryType[]>,
	singleContent?:FetchDataResult<SingleContentType[]>,
	location:string,
	_setLocation:(path:string)=>void

}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const PreSetProvider: React.FC<ProviderProps> = ({ children }) => {
//パス,特定のリンクでのみ取得,postデータ
	const {data:categoryData,loading:categoryLoading,error:categoryError } = useFetchData<CategoryType[]>(GetAllCategoryEndPoint,false);
	const {data:tagData,loading:tagLoading,error:tagError } = useFetchData<TagType[]>(GetAllTagEndPoint,false);
	const {data:recipeData,loading:recipeLoading,error:recipeError } = useFetchData<RecipeType>(GetRecipeDetail,true,[PAGE_NAMES.RECIPE_PAGE]);
	const {data:recipeCategoryData,loading:recipeCategoryLoading,error:recipeCategoryError } = useFetchData<CategoryType[],RecipeType>(GetCategoryByRecipeUid,true,[PAGE_NAMES.RECIPE_PAGE],recipeData);
	const {data:singleContentData,loading:singleContentLoading,error:singleContentError} = useFetchData<SingleContentType[]>(GetSingleContentAll,false);
	const [location,setLocation] = useState<string>('');
	const _setLocation = (path:string) =>{
		setLocation(path)
	}
	const contextValue: ContextType = {
		category:{data:categoryData,loading:categoryLoading,error:categoryError},
		tag:{data:tagData,loading:tagLoading,error:tagError},
		recipe:{data:recipeData,loading:recipeLoading,error:recipeError},
		recipeCategory:{data:recipeCategoryData,loading:recipeCategoryLoading,error:recipeCategoryError},
		singleContent:{data:singleContentData,loading:singleContentLoading,error:singleContentError},
		location,
		_setLocation
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
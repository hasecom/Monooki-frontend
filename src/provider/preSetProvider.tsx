'use client'
import { GetAllCategoryEndPoint,GetAllTagEndPoint } from '@/constant/preset';
import { CategoryType,TagType } from '@/types/data';
import useFetchData from '@/hooks/fetch';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import getCurrentLocation from '@/util/getCurrentLocation';
import { FetchDataResult } from '@/types/common';
import { usePathname } from 'next/navigation';
import { PAGES } from '@/constant/preset';
interface ContextType {
	category:FetchDataResult<CategoryType[]>,
	tag:FetchDataResult<TagType[]>
}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const PreSetProvider: React.FC<ProviderProps> = ({ children }) => {
	const pathname = usePathname();
	const {data:categoryData,loading:categoryLoading,error:categoryError } = useFetchData<CategoryType[]>(GetAllCategoryEndPoint);
	const {data:tagData,loading:tagLoading,error:tagError } = useFetchData<TagType[]>(GetAllTagEndPoint);
	if(getCurrentLocation(pathname) == PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE){
		console.log("aaa")
	}
	const contextValue: ContextType = {
		category:{
			data:categoryData,
			loading:categoryLoading,
			error:categoryError
		},
		tag:{
			data:tagData,
			loading:tagLoading,
			error:tagError
		}

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
'use client'
import { GetAllCategoryEndPoint } from '@/constant/preset';
import { CategoryType } from '@/types/data';
import useFetchData from '@/util/fetch';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FetchDataResult } from '@/types/common';
interface ContextType {
	category:FetchDataResult<CategoryType[]>
}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const PreSetProvider: React.FC<ProviderProps> = ({ children }) => {
	const {data:categoryData,loading:categoryLoading,error:categoryError } = useFetchData<CategoryType[]>(GetAllCategoryEndPoint);
  const contextValue: ContextType = {
		category:{
			data:categoryData,
			loading:categoryLoading,
			error:categoryError
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
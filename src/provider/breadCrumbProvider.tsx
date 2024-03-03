'use client'
import { GetAllCategoryEndPoint,GetAllTagEndPoint } from '@/constant/preset';
import { CategoryType,TagType } from '@/types/data';
import useFetchData from '@/hooks/fetch';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FetchDataResult,breadCrumbValueType } from '@/types/common';
interface ContextType {

}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const BreadCrumbProvider: React.FC<ProviderProps> = ({ children }) => {
	const initbreadCrumbValue = [
		{
			name:'ホーム',
			path:'',
			isLink:true
		}
	]
	const [breadCrumbValue,setBreadCrumbValue] = useState(initbreadCrumbValue);
	const currentLocation = ({newBreadcrumbItem}:{newBreadcrumbItem:breadCrumbValueType}) => {

		const newBreadCrumbValue = [...initbreadCrumbValue, newBreadcrumbItem];
		setBreadCrumbValue(newBreadCrumbValue);
	}
	const contextValue: ContextType = {

  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const usebreadCrumbContext = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { BreadCrumbProvider, usebreadCrumbContext };
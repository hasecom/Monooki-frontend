'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { breadCrumbValueType } from '@/types/common';
import { PAGES } from '@/constant/preset';

interface ContextType {
	breadCrumbValue:breadCrumbValueType[],
	addCurrentLocation:(newBreadcrumbItem:breadCrumbValueType)=>void
}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const BreadCrumbProvider: React.FC<ProviderProps> = ({ children }) => {
	const initbreadCrumbValue = [
		{
			name:'ホーム',
			path:PAGES.HOME_PAGE,
			isLink:true
		}
	]
	const [breadCrumbValue,setBreadCrumbValue] = useState(initbreadCrumbValue);
	const addCurrentLocation = ({newBreadcrumbItem}:{newBreadcrumbItem:breadCrumbValueType}) => {
		const newBreadCrumbValue = [...initbreadCrumbValue, newBreadcrumbItem];
		setBreadCrumbValue(newBreadCrumbValue);
	}
	const contextValue: ContextType = {
		breadCrumbValue:breadCrumbValue,
		addCurrentLocation:(newBreadcrumbItem:breadCrumbValueType)=>addCurrentLocation({newBreadcrumbItem})
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useBreadCrumbContext = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { BreadCrumbProvider, useBreadCrumbContext };
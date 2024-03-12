'use client'
import React, { createContext, useContext, ReactNode } from 'react';
import { breadCrumbValueType } from '@/types/common';
import useBreadCrumb from '@/hooks/useBreadCrumb';

interface ContextType {
	breadCrumbValue:breadCrumbValueType[]
}
type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextType | undefined>(undefined);
const BreadCrumbProvider: React.FC<ProviderProps> = ({ children }) => {
	const {breadCrumbValue} = useBreadCrumb();

	const contextValue: ContextType = {
		breadCrumbValue:breadCrumbValue
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
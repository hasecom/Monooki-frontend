import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { FetchDataResult } from '@/types/common';
import { usePathname } from 'next/navigation';
import {  GetCategoryByRecipeUid, GetRecipeDetail } from '@/constant/preset';
import getCurrentLocation from '@/util/getCurrentLocation';
import { RecipeType } from '@/types/data';
const useFetchData = <T,U>(endpoint: string,isArg:boolean,requestArray: string[] | null= null,referData?:any): FetchDataResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		const fetchData = async () => {
			let requestEndpoint  = endpoint;
			const spilitRequestPathNameArray = pathname.split('/');
			
			if (endpoint == GetRecipeDetail){
				requestArray?.map((requestPathname)=>{
					if(requestPathname == getCurrentLocation(pathname)){
						requestEndpoint = requestEndpoint + spilitRequestPathNameArray[2] + '/'
						isArg = false
					}
				})
			}else if(endpoint == GetCategoryByRecipeUid){
				requestArray?.map((requestPathname)=>{
					if(requestPathname == getCurrentLocation(pathname) && referData){
						requestEndpoint = requestEndpoint + referData.uid + '/'
						isArg = false
					}
				})
			}
			try {
				if (isArg) throw new Error;
				const response: AxiosResponse<T> = await axios.get(process.env.NEXT_PUBLIC_API_URL + requestEndpoint);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				setError(error instanceof Error ? error : new Error(String(error)));
				setLoading(false);
			}
		};
		fetchData();
	}, [pathname,referData]);

	return { data, loading, error };
};

export default useFetchData;

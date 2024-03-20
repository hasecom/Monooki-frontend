import { useState, useEffect, useRef } from 'react';
import axios, { AxiosResponse } from 'axios';
import { FetchDataResult } from '@/types/common';
import { usePathname } from 'next/navigation';
import {  GetCategoryByRecipeUid, GetRecipeDetail, PAGE_NAMES } from '@/constant/preset';
const useFetchData = <T,U = null>(endpoint: string,isArg:boolean,requestArray: string[] | null= null,referData?:any): FetchDataResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const pathname = usePathname();
    const isArgRef = useRef(isArg); // useRefを使用してisArgをミュータブルな値として管理する
    useEffect(() => {
        const fetchData = async () => {
            let requestEndpoint  = endpoint;
            const spilitRequestPathNameArray = pathname.split('/');
            if (endpoint == GetRecipeDetail){
                requestArray?.map((requestPathname)=>{//取得ページ
                    if(requestPathname == PAGE_NAMES.RECIPE_PAGE){
                        requestEndpoint = requestEndpoint + spilitRequestPathNameArray[2] + '/';
                        isArgRef.current = false; // useRefを介してisArgを更新する
                    }
                })
            } else if(endpoint == GetCategoryByRecipeUid){
                requestArray?.map((requestPathname)=>{
                    if(requestPathname ==  PAGE_NAMES.RECIPE_PAGE && referData){
                        requestEndpoint = requestEndpoint + referData.uid + '/';
                        isArgRef.current = false; // useRefを介してisArgを更新する
                    }
                })
            }
            try {
                if (isArgRef.current) throw new Error;
                const response: AxiosResponse<T> = await axios.get(process.env.NEXT_PUBLIC_API_URL + requestEndpoint);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error instanceof Error ? error : new Error(String(error)));
                setLoading(false);
            }
        };
        fetchData();
    }, [pathname, referData]);

    return { data, loading, error };
};

export default useFetchData;

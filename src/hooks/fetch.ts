import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { FetchDataResult } from '@/types/common';

const useFetchData = <T>(endpoint: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(process.env.NEXT_PUBLIC_API_URL + endpoint);
        setData(response.data);
        setLoading(false);
      } catch (error) {
				setError(error instanceof Error ? error : new Error(String(error)));
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;

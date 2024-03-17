import  { useState, useEffect } from 'react';
import { ssgGetFetch } from '@/util/ssgFetch';
import { CategoryType } from '@/types/data';
import { GetAllCategoryEndPoint, PAGES,TYPES } from '@/constant/preset';

type optionParam = {
	name:string,
	link:string,
	type:string
}
const useSearchInput = () => {
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState<optionParam[]>([]);
	useEffect(() => {
		const fetchData = async() =>  {
			const filteredOptions = options.filter(option =>
				option.name.toLowerCase().includes(inputValue.toLowerCase())
			);
			if(filteredOptions.length == 0){
			const data  = await ssgGetFetch<CategoryType[]>(GetAllCategoryEndPoint);
			const filterCategory = data.filter(category=>category.class_name === TYPES.CATEGORY.CATEGORY_SUB_SUB_CATEGORY)
			const optionNames = filterCategory.map(category => ({ 
				name: category.name,
				link:`${PAGES.CATEGORY_RECIPE_MAP_LIST_PAGE}${category.attribute}`,
				type:'category'
			}));
			setOptions(optionNames);
			}
		}
		fetchData();
	}, [inputValue]);
	return { inputValue, setInputValue, options };
};

export default useSearchInput;
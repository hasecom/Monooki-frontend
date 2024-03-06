import  { useState, useEffect } from 'react';
import { getRecipeTitleList } from '@/util/getRecipe';

const useSearchInput = () => {
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState<string[]>([]);
	useEffect(() => {
		const fetchData = async() =>  {
			//サブセット(大文字小文字)配列※候補
			const filteredOptions = options.filter(option =>
				option.toLowerCase().includes(inputValue.toLowerCase())
			);
			if(filteredOptions.length == 0){
			const data  = await getRecipeTitleList('monooki/get/category/');
				setOptions(data.map(recipe => recipe.name));
			}
		}
		fetchData();
	}, [inputValue]);
	return { inputValue, setInputValue, options };
};

export default useSearchInput;
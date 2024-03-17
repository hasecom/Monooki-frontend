import React,{useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useSearchInput from '@/hooks/useSearchInput';
import { useRouter } from 'next/navigation'

const SearchInputForm = () => {
	const router = useRouter()
	const { inputValue, setInputValue, options } = useSearchInput();
	const [value, setValue] = React.useState<string | null>(inputValue || null);

	useEffect(()=>{
		const [search] = options.filter(item=>item.name === value);
		if(!search)return;
		router.push(search.link);
	},[value])
  return (
    <Stack spacing={2} sx={{ width:300}}>
      <Autocomplete
			size="small"
			 sx={{backgroundColor: '#dfe6e9', borderRadius: '16px'}}
        freeSolo
				options={ options.length > 0
					? options.map(option => option.name)
					: []}
				value={value || null}
				inputValue={inputValue}
				onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
				onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        renderInput={(params) =>
          <TextField
            {...params}
            label="検索"
            variant="outlined"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
							'& .MuiAutocomplete-input': {
                paddingTop: '8px', 
                paddingBottom: '8px',
              },
              '& fieldset': {
                border: 'none',
              },
            }}
          />
        }
      />
    </Stack>
  );
};
export default SearchInputForm;
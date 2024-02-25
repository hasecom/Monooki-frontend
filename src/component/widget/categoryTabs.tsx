import { useState } from "react";
import { Tab } from "@mui/material"
import { TabPanel, TabContext,TabList } from '@mui/lab';
import { Heading } from "@/constant/preset";
import { isScreenSizeAbove } from "@/util/mediaQuery";
const CategoryTabs = () => {
	const [value, setValue] = useState("1");
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	if(isScreenSizeAbove('sm'))return (<></>);//スマホサイズは非表示
	return (
		<>
			<TabContext value={value}>
					<TabList onChange={handleChange} aria-label="categoryLabel" centered variant='fullWidth' textColor='inherit' 
					 TabIndicatorProps={{
						style: {
							backgroundColor: "#b2bec3"
						}
					}}>
						<Tab label={Heading.Category.CategorySearch} value="1" />
						<Tab label={Heading.Category.PurposeSearch} value="2" />
					</TabList>
				<TabPanel value="1">Item One</TabPanel>
				<TabPanel value="2">Item Two</TabPanel>
			</TabContext>
		</>
	)
}
export default CategoryTabs;
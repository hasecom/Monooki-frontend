'use client'
import { useState } from "react";
import { Tab } from "@mui/material"
import { TabPanel, TabContext,TabList } from '@mui/lab';
import { Heading } from "@/constant/preset";
import { isScreenSizeAbove } from "@/util/mediaQuery";
import { CategoryPaperLink } from "@/ui/link/categoryLink";
import { usePresetContext } from "@/provider/preSetProvider";
import { categoryFilterByClassName, tagFilterByTagType } from "@/util/formatter";

const CategoryTabs = () => {
	const { category,tag } = usePresetContext();
	const filteredCategies = categoryFilterByClassName({categories:category.data,className:1})
	const filteredTags = tagFilterByTagType({tags:tag.data,tagType:2})
	const [value, setValue] = useState("1");
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	if(isScreenSizeAbove('sm'))return (<></>);//スマホサイズは非表示
	return (
		<>
			<TabContext value={value} >
					<TabList onChange={handleChange} aria-label="categoryLabel" centered variant='fullWidth' textColor='inherit' 
					 TabIndicatorProps={{
						style: {
							backgroundColor: "#b2bec3",
						}
					}}>
						<Tab label={Heading.Category.CategorySearch} value="1" />
						<Tab label={Heading.Category.PurposeSearch} value="2" />
					</TabList>
				<TabPanel value="1">
					<CategoryPaperLink category={filteredCategies}  />
				</TabPanel>
				<TabPanel value="2">
				<CategoryPaperLink category={filteredTags}  />
				</TabPanel>
			</TabContext>
		</>
	)
}
export default CategoryTabs;
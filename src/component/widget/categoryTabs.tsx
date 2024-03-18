'use client'
import { useState } from "react";
import { Tab } from "@mui/material"
import { TabPanel, TabContext,TabList } from '@mui/lab';
import { Heading } from "@/constant/preset";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { CategoryPaperLink,TagPaperLink } from "@/ui/link/categoryLink";
import { usePresetContext } from "@/provider/preSetProvider";
import { categoryFilterByClassName, tagFilterByTagType } from "@/util/formatter";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tabPanel: {
		padding:0,
		marginTop:'1em'
  },
	tab:{
		borderRadius:0
	}
}));
const CategoryTabs = () => {
	const { category,tag } = usePresetContext();
	const classes = useStyles();
	const [value, setValue] = useState("1");
	const isScreenSizeAboveSm = useIsScreenSizeAbove('sm')
	if(!category || !tag) return <></>;
	const filteredCategies = categoryFilterByClassName({categories:category.data,className:3})
	const filteredTags = tagFilterByTagType({tags:tag.data,tagType:2})
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	
	if(isScreenSizeAboveSm)return (<></>);//スマホサイズは非表示
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
				<TabPanel value="1" classes={{ root: classes.tabPanel }}>
					<CategoryPaperLink category={filteredCategies}   />
				</TabPanel>
				<TabPanel value="2" classes={{ root: classes.tabPanel }}>
				<TagPaperLink category={filteredTags} />
				</TabPanel>
			</TabContext>
		</>
	)
}
export default CategoryTabs;
'use client'
import { Box } from "@mui/material";
import {CategoryTagsTitle} from '@/ui/text/title';
import { CategoryTagChip } from "@/ui/chip/chip";
import { CategoryLinkProps,TagLinkProps } from "@/types/common";
import { NextPage } from "next";
import { PAGES } from "@/constant/preset";

type CategoryTagsProps = {
	headingText:string;
} & (CategoryLinkProps | TagLinkProps);

const CategoryTags:NextPage<CategoryTagsProps> = ({category,headingText,length=10}) => {
	return (
		<Box sx={{paddingY:1,paddingX:1}}>
			<CategoryTagsTitle >{headingText}</CategoryTagsTitle>
			{
			(category.slice(0, length) || []).map((tag,index)=>(
				<CategoryTagChip key={index} label={tag.name} link={`${PAGES.TAG_RECIPE_MAP_LIST_PAGE}${tag.attribute}`} />
			))
		}
		</Box>
	);
}
export default CategoryTags;
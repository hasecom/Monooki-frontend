'use client'
import { Box } from "@mui/material";
import {CategoryTagsTitle} from '@/ui/text/title';
import { CategoryTagChip } from "@/ui/chip/chip";
import { CategoryLinkProps,TagLinkProps } from "@/types/common";
import { NextPage } from "next";

type CategoryTagsProps = {
	headingText:string;
} & (CategoryLinkProps | TagLinkProps);

const CategoryTags:NextPage<CategoryTagsProps> = ({category,headingText,length=10}) => {
	return (
		<Box sx={{paddingY:1,paddingX:1}}>
			<CategoryTagsTitle >{headingText}</CategoryTagsTitle>
			{
			(category.slice(0, 10) || []).map((tag,index)=>(
				<CategoryTagChip key={index} label={tag.name} />
			))
		}
		</Box>
	);
}
export default CategoryTags;
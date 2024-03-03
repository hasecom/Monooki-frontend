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

const categoryTagsData = [
	{id:0,name:'使えない'},
	{id:1,name:'LINE'},
	{id:2,name:'X'},
	{id:3,name:'画像処理'},
	{id:4,name:'フリーズ'},
	{id:5,name:'落ちる'},
	{id:6,name:'アプリ'},
	{id:7,name:'止まる'},
	{id:8,name:'消えない'},
	{id:9,name:'凍結'},
	{id:10,name:'退会'},
	{id:11,name:'課金'},
]
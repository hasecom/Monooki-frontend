import { Box, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CategoryLinkProps,TagLinkProps } from "@/types/common";
import { CategoryGridPapers } from "../paper/paper";
import { NextPage } from "next";
const CategoryLink:NextPage<CategoryLinkProps | TagLinkProps> = ({category,length = 10}) => {
	return (
		<Box sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
			{category.slice(0, length).map((item, index) => (
				<Box key={index} sx={{ display: 'inline-block', paddingX: 2, paddingY: 2 }}>
					{item.name}
				</Box>
			))}
			<Box sx={{ display: 'inline-block', paddingX: 2, paddingY: 2, color: '#636e72' }}>
				すべてを見る
				<KeyboardArrowRightIcon />
			</Box>
		</Box>
	)
}
const CategoryPaperLink:NextPage<CategoryLinkProps | TagLinkProps> = (props) => {
	return (
		<>
		<CategoryGridPapers {...props} />
		<Box sx={{textAlign:'right',paddingY:2, color: '#636e72' }}>
				<Typography variant="subtitle2">
					すべてを見る<KeyboardArrowRightIcon />
				</Typography>
		</Box>
		</>
	)
}
export {CategoryLink,CategoryPaperLink}
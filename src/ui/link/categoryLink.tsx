import { Box, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { categoryLinkProps } from "@/types/common";
import { CategoryGridPapers } from "../paper/paper";
import { NextPage } from "next";
const CategoryLink:NextPage<categoryLinkProps> = ({category,length = 10}) => {
	return (
		<Box>
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
const CategoryPaperLink:NextPage<categoryLinkProps> = ({category,length = 9}) => {
	return (
		<>
		<CategoryGridPapers category={category} length={length} />
		<Box sx={{textAlign:'right',paddingY:2, color: '#636e72' }}>
				<Typography variant="subtitle2">
					すべてを見る<KeyboardArrowRightIcon />
				</Typography>
		</Box>
		</>
	)
}
export {CategoryLink,CategoryPaperLink}
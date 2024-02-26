import { NextPage } from "next";
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CategoryListProps } from "@/types/common";
import { CategoryTitle } from "@/ui/text/title";
import { Box } from "@mui/material";

const CategoryList: NextPage<CategoryListProps> = (props) => {
	(props.category).forEach((category) => {
	});
	return (
			<>
			
				{(props.category).map((category, index) => (
				<Grid container spacing={0} sx={{my:2}} key={index}>
					<Grid item xs={12} md={2}>
						<Skeleton variant="rectangular" width={'50px'} height={'50px'} />
					</Grid>
					<Grid item xs={12} md={10}>
						<CategoryTitle>{category.name}</CategoryTitle>
					</Grid>
				</Grid>
				))}
			
			</>
	)
}
export default CategoryList;
import { NextPage } from "next";
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { CategoryListProps } from "@/types/common";

const CategoryList: NextPage<CategoryListProps> = (props) => {
	return (
		<>
			<Grid container spacing={0} >
				<Grid item xs={12} md={8}>
					<Skeleton variant="rectangular" width={210} height={118} />
				</Grid>
				<Grid item xs={12} md={4}>
					xs=4
				</Grid>
			</Grid>
		</>
	)
}
export default CategoryList;
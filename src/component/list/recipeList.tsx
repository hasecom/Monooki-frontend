import { NextPage } from "next";
import { CategoryType } from "@/types/data";
import { GetRecipeDetailByCategory } from "@/constant/preset";
import { ssgGetFetch } from "@/util/ssgFetch";
import { RecipeType } from "@/types/data";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { RecipeListTitle } from "@/ui/text/title";
type RecipeListProps = {
	categoryId?: CategoryType['id']
}

const RecipeList: NextPage<RecipeListProps> = async ({ categoryId }) => {
	const recipeList = await ssgGetFetch<RecipeType[]>(GetRecipeDetailByCategory + categoryId);
	if (!recipeList) return <></>;
	return (
		<List>
			{recipeList.map((recipe, index) => (
				<>
					<ListItem alignItems="flex-start" key={index}>
						<ListItemAvatar>
							<Avatar alt={recipe.title} src={recipe.thumbnailUrl} variant="rounded"
								sx={{ width: [50, 70], height: [50, 70] }}
							/>
						</ListItemAvatar>
						<ListItemText>
							<RecipeListTitle>{recipe.title}</RecipeListTitle>
						</ListItemText>
					</ListItem>
					<Divider variant="inset" />
				</>
			))}
		</List>
	)
}
export default RecipeList;


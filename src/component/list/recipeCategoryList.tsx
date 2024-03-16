import { NextPage } from "next";
import { CategoryType } from "@/types/data";
import { GetRecipeDetailByCategory } from "@/constant/preset";
import { ssgGetFetch } from "@/util/ssgFetch";
import { RecipeType } from "@/types/data";
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { RecipeListTitle } from "@/ui/text/title";
import { PAGES } from "@/constant/preset";
type RecipeListProps = {
	categoryId?: CategoryType['id']
}

const RecipeCategoryList: NextPage<RecipeListProps> = async ({ categoryId }) => {
	const recipeList = await ssgGetFetch<RecipeType[]>(GetRecipeDetailByCategory + categoryId);
	if (!recipeList) return <></>;
	return (
		<List>
			{recipeList.map((recipe, index) => (
				<ListItem alignItems="flex-start" key={index}>
					<ListItemButton component="a" href={PAGES.RECIPE_PAGE + recipe.uid}>
						<ListItemAvatar>
							<Avatar alt={recipe.title} src={recipe.thumbnailUrl} variant="rounded"
								sx={{ width: [50, 70], height: [50, 70] }}
							/>
						</ListItemAvatar>
						<ListItemText sx={{ paddingX: 2 }}>
							<RecipeListTitle>{recipe.title}</RecipeListTitle>
						</ListItemText>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}
export default RecipeCategoryList;


import { NextPage } from "next";
import { TagType } from "@/types/data";
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { GetRecipeDetailByTag } from "@/constant/preset";
import { ssgGetFetch } from "@/util/ssgFetch";
import { RecipeType } from "@/types/data";
import { RecipeListTitle } from "@/ui/text/title";
import { PAGES } from "@/constant/preset";
type RecipeListProps = {
	tagId?: TagType['id']
}

const RecipeTagList: NextPage<RecipeListProps> = async ({ tagId }) => {
	if(!tagId) return <>このタグは存在しません。</>;
	const recipeList = await ssgGetFetch<RecipeType[]>(GetRecipeDetailByTag + tagId);
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
export default RecipeTagList;


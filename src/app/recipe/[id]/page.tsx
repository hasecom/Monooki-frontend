import { GetRecipeIdList } from "@/constant/preset";
import { NextPage } from "next";
import { ssgGetFetch } from "@/util/ssgFetch";
import RecipeGroup from "@/component/content/recipeGroup";
import { GetRecipeDetail } from "@/constant/preset";
import { RecipeType } from "@/types/data";
type RecipeProps = {
	params: {
		id: string
	}
}
type getRecipeProps = {
	recipe:RecipeType
}
const Recipe: NextPage<RecipeProps> = async (props) => {
	const endPoint = GetRecipeDetail + props.params.id;
	const { recipe } = await ssgGetFetch<getRecipeProps>(endPoint)
	return (
		<>
				<RecipeGroup recipe={recipe} />
		</>
	)
}
export default Recipe;

type getRecipeIdListType = {
	uid:string
}

export const generateStaticParams = async () => {
	 const recipeIdList = await ssgGetFetch<getRecipeIdListType[]>(GetRecipeIdList);
	return await recipeIdList.map((recipe) => ({
		id: recipe.uid.toString()
	}));
}
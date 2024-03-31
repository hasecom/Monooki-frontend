import { GetRecipeIdList, GetTagByRecipeUid, Service, assetLinks } from "@/constant/preset";
import { NextPage } from "next";
import { ssgGetFetch } from "@/util/ssgFetch";
import RecipeGroup from "@/component/content/recipeGroup";
import { GetRecipeDetail } from "@/constant/preset";
import { RecipeType, TagType } from "@/types/data";
type RecipeProps = {
	params: {
		id: string
	}
}

const Recipe: NextPage<RecipeProps> = async (props) => {
	const recipeUid =  props.params.id;
	const recipe = await ssgGetFetch<RecipeType>(GetRecipeDetail + recipeUid);
	const recipeTags = await ssgGetFetch<TagType[]>(GetTagByRecipeUid + recipeUid);
	return (
		<>
				<RecipeGroup recipe={recipe} recipeTags={recipeTags}  />
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
export const generateMetadata = async (props:RecipeProps) =>  {
	const recipeUid =  props.params.id;
	const recipe = await ssgGetFetch<RecipeType>(GetRecipeDetail + recipeUid);
	const metaDescription = (recipe.introduction?recipe.introduction:"").replace(/[#`*_-]/g, '').substring(0,50);
  return {
		metadataBase: new URL(Service.ServiceLink),
    title: recipe.title + '　|　' + Service.ServiceNameEn ,
		description:metaDescription,
		openGraph: {
			type: "website",
			title: recipe.title + '　|　' + Service.ServiceNameEn ,
			description:metaDescription,
			siteName: Service.ServiceNameEn,
			url: "",
			images: {
				url: recipe.thumbnailUrl,
				type: "image/png",
				width: 600,
				height: 660,
				alt:Service.ServiceNameEn,
			},
		},
		twitter: {
			title:recipe.title + '　|　' + Service.ServiceNameEn,
			description:metaDescription,
			images: {
				url: recipe.thumbnailUrl,
				type: "image/png",
				width: 600,
				height:600,
				alt: Service.ServiceNameEn,
			},
		}
  };
}
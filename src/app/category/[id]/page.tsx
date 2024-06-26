import { GetAllCategoryEndPoint,GetPartCategoryEndPoint, Service, assetLinks } from "@/constant/preset";
import { NextPage } from "next";
import { CategoryType } from "@/types/data";
import { ssgGetFetch } from "@/util/ssgFetch";
import CategoryRecipeList from "@/component/list/categoryRecipeList";
import { TYPES } from "@/constant/preset";
import { notFound } from "next/navigation";
type CategoryProps = {
	params: {
		id: string
	}
}
const CategoryName: NextPage<CategoryProps> = async (props) => {
	const [categoryList] = await ssgGetFetch<CategoryType[]>(GetPartCategoryEndPoint + props.params.id);
	if(!categoryList) return notFound();
	return (
		<>
				<CategoryRecipeList category={categoryList} />
		</>
	)
}
export default CategoryName;

export const generateStaticParams = async () => {
	const categoryList = await ssgGetFetch<CategoryType[]>(GetAllCategoryEndPoint);
	return await categoryList.filter((category) => category.class_name == TYPES.CATEGORY.CATEGORY_SUB_SUB_CATEGORY).map((category) => ({
		id: category.attribute.toString()
	}));
}

export const generateMetadata = async (props:CategoryProps) =>  {
	const [categoryList] = await ssgGetFetch<CategoryType[]>(GetPartCategoryEndPoint + props.params.id);
	const metaDescription = categoryList.name +  'を含むカテゴリの動画ページ一覧です。';
  return {
		metadataBase: new URL(Service.ServiceLink),
    title: categoryList.name  + 'を含むカテゴリ一覧　|　' + Service.ServiceNameEn ,
		description:metaDescription,
		openGraph: {
			type: "website",
			title: categoryList.name + 'を含むカテゴリ一覧　|　'  + Service.ServiceNameEn ,
			description:metaDescription,
			siteName: Service.ServiceNameEn,
			url: "",
			images: {
				url: Service.ServiceLink + assetLinks.ogImage,
				type: "image/png",
				width: 1200,
				height: 630,
				alt:Service.ServiceNameEn,
			},
		},
		twitter: {
			title:categoryList.name + 'を含むカテゴリ一覧　|　'  + Service.ServiceNameEn ,
			description:metaDescription,
			images: {
				url: Service.ServiceLink + assetLinks.ogImage,
				type: "image/png",
				width: 1200,
				height: 630,
				alt: Service.ServiceNameEn,
			},
		}
  };
}
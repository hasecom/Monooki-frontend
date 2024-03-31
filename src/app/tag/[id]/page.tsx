import { GetAllTagEndPoint,GetPartTagEndPoint, Service, assetLinks } from "@/constant/preset";
import { NextPage } from "next";
import { TagType } from "@/types/data";
import { ssgGetFetch } from "@/util/ssgFetch";
import TagRecipeList from "@/component/list/tagRecipeList";
import { notFound } from 'next/navigation';
type TagProps = {
	params: {
		id: string
	}
}

const TagContent: NextPage<TagProps> = async (props) => {
	const [tagList] = await ssgGetFetch<TagType[]>(GetPartTagEndPoint + props.params.id);
	if(!tagList) return notFound();
	return (
		<>
			<TagRecipeList tag={tagList} />
		</>
	)
}
export default TagContent;

export const generateStaticParams = async () => {
	const tagList = await ssgGetFetch<TagType[]>(GetAllTagEndPoint);
	return await tagList.map((tag) => ({
		id: tag.attribute.toString()
	}));
}

export const generateMetadata = async (props:TagProps) =>  {
	const [tagList] = await ssgGetFetch<TagType[]>(GetPartTagEndPoint + props.params.id);
	const metaDescription = tagList.name +  'を含むタグの動画ページ一覧です。';
  return {
		metadataBase: new URL(Service.ServiceLink),
    title: tagList.name  + 'を含むタグ一覧　|　' + Service.ServiceNameEn ,
		description:metaDescription,
		openGraph: {
			type: "website",
			title: tagList.name + 'を含むタグ一覧　|　'  + Service.ServiceNameEn ,
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
			title:tagList.name + 'を含むタグ一覧　|　'  + Service.ServiceNameEn ,
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
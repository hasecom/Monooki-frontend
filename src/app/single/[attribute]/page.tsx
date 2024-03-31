import {Metadata} from "next";
import { NextPage } from "next";
import { ssgGetFetch } from "@/util/ssgFetch";
import { GetSingleContentAll, SingleContentGetByAttributeView } from "@/constant/preset";
import { SingleContentType } from "@/types/data";
import { Box } from "@mui/material";
import { PageTitle } from "@/ui/text/title";
import MdxContent from "@/component/mdx/mdxContent";
import { Service,assetLinks } from "@/constant/preset";
type SingleContentProps = {
	params: {
		attribute: string
	}
}


const SingleContent: NextPage<SingleContentProps> = async (props) => {
	const endPoint = SingleContentGetByAttributeView + props.params.attribute;
	const singleContent = await ssgGetFetch<SingleContentType>(endPoint);
	return (
		<>
			<Box>
				<Box sx={{ paddingX: 1 }}>
					<PageTitle>{singleContent.title}</PageTitle>
					<Box sx={{ paddingX: 2, paddingY: 2 }}>
						<MdxContent>{singleContent.description}</MdxContent>
					</Box>
				</Box>
			</Box>
		</>
	)
}
export default SingleContent;

type getSingleContentListType = {
	attribute: string
}

export const generateStaticParams = async () => {
	const singleContentList = await ssgGetFetch<getSingleContentListType[]>(GetSingleContentAll);
	return await singleContentList.map((singleContent) => ({
		attribute: singleContent.attribute.toString()
	}));
}

export const generateMetadata = async (props:SingleContentProps) =>  {
	const endPoint = SingleContentGetByAttributeView + props.params.attribute;
	const singleContent = await ssgGetFetch<SingleContentType>(endPoint);
	const metaDescription = (singleContent.description?singleContent.description:"").replace(/[#`*_-]/g, '').substring(0,50);
  return {
		metadataBase: new URL(Service.ServiceLink),
    title: singleContent.title  + '　|　' + Service.ServiceNameEn,
		description:metaDescription,
		openGraph: {
			type: "website",
			title: singleContent.title + '　|　' + Service.ServiceNameEn,
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
			title:singleContent.title + '　|　' + Service.ServiceNameEn,
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
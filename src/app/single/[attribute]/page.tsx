
import { NextPage } from "next";
import { ssgGetFetch } from "@/util/ssgFetch";
import { GetSingleContentAll, SingleContentGetByAttributeView } from "@/constant/preset";
import { SingleContentType } from "@/types/data";
import { Box } from "@mui/material";
import { PageTitle } from "@/ui/text/title";
import MdxContent from "@/component/mdx/mdxContent";
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


import { GetAllTagEndPoint,GetPartTagEndPoint } from "@/constant/preset";
import { NextPage } from "next";
import { TagType } from "@/types/data";
import { ssgGetFetch } from "@/util/ssgFetch";
import TagRecipeList from "@/component/list/tagRecipeList";
type TagProps = {
	params: {
		id: string
	}
}

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = 60

const TagContent: NextPage<TagProps> = async (props) => {
	const [tagList] = await ssgGetFetch<TagType[]>(GetPartTagEndPoint + props.params.id);
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
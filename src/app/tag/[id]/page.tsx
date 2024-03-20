import { GetAllTagEndPoint,GetPartTagEndPoint } from "@/constant/preset";
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
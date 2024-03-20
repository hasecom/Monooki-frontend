'use client'
import { usePresetContext } from "@/provider/preSetProvider";
import CategoryTags from "../widget/categoryTags";
import { tagFilterByTagType } from "@/util/formatter";
import { PAGE_NAMES } from "@/constant/preset";
const SideBar = () => {
	const { tag,location } = usePresetContext();
	if(!tag) return <></>
	if(location == PAGE_NAMES.SINGLE_PAGE) return <></>;
	const filteredTags = tagFilterByTagType({tags:tag.data,tagType:2})
	return (
		<>
		<CategoryTags headingText="定番のキーワード" category={filteredTags} length={10} />
		</>
	);
}
export default SideBar;
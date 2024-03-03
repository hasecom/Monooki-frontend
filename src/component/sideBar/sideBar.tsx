import { usePresetContext } from "@/provider/preSetProvider";
import CategoryTags from "../widget/categoryTags";
import { tagFilterByTagType } from "@/util/formatter";
const SideBar = () => {
	const { tag } = usePresetContext();
	const filteredTags = tagFilterByTagType({tags:tag.data,tagType:2})
	return (
		<>
		<CategoryTags headingText="定番のキーワード" category={filteredTags} length={10} />
		</>
	);
}
export default SideBar;
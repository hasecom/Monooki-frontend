import { CategoryType } from "@/types/data";
import { TagType } from "@/types/data";
export const categoryFilterByClassName = <T extends CategoryType>({ categories,className }: { categories: T[] | null,className:number }): T[] => {
	if (!categories) {return [];}
	return categories.filter((category) => category.class_name === className);
};

export const tagFilterByTagType = <T extends TagType>({ tags,tagType }: { tags: T[] | null,tagType:number }): T[] => {
	if (!tags) {return [];}
	return tags.filter((tag) => tag.tag_type === tagType);
};
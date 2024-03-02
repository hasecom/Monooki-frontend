import { CategoryType } from "@/types/data";
export const categoryFilterByClassName = <T extends CategoryType>({ categories,className }: { categories: T[] | null,className:number }): T[] => {
	if (!categories) {return [];}
	return categories.filter((category) => category.class_name === className);
};
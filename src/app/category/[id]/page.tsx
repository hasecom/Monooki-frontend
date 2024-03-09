import { GetAllCategoryEndPoint,GetPartCategoryEndPoint } from "@/constant/preset";
import { NextPage } from "next";
import { CategoryType } from "@/types/data";
import { ssgGetFetch } from "@/util/ssgFetch";
import CategoryRecipeList from "@/component/list/categoryRecipeList";
import { TYPES } from "@/constant/preset";
type CategoryProps = {
	params: {
		id: string
	}
}
const CategoryName: NextPage<CategoryProps> = async (props) => {
	const [categoryList] = await ssgGetFetch<CategoryType[]>(GetPartCategoryEndPoint + props.params.id);
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
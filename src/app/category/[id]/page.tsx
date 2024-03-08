import {  GetAllCategoryEndPoint } from "@/constant/preset";
import { NextPage } from "next";
import { CategoryType } from "@/types/data";
import { ssgGetFetch } from "@/util/ssgFetch";

type CategoryProps = {
	params: {
		attribute:string
	}
}
const CategoryName: NextPage<CategoryProps> = async (props) => {
	const categoryList = await ssgGetFetch<CategoryType[]>(GetAllCategoryEndPoint);
	return (
		<>
				l
		</>
	)
}
export default CategoryName;

export const generateStaticParams = async () => {
	const categoryList = await ssgGetFetch<CategoryType[]>(GetAllCategoryEndPoint);
	return await categoryList.map((category)=>({
		id:category.attribute.toString()
	}));
}
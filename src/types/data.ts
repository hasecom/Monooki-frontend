export type CategoryType = {
	id:number
	name:string,
	class_name:number,
	attribute:string,
	category_type:number//親categoryId
}
export type TagType = {
	id:number,
	name:string,
	class_name:number,
	attribute:string,
	tag_type:number
}
export type RecipeType = {
  id?: number;
  uid: string;
  title: string;
  introduction: string;
  contentId: string;
  videoUrl: string;
  thumbnailUrl: string;
  available: string;
  updatedAt: string;
  createdAt: string;
	contents?:ContentType[],
	remark?:string
};
export type ContentType = {
	id?:number,
	recipe?:number,
	label:string,
	description:string,
	order:string | number
}
export type SingleContentType = {
	id?:number,
	attribute:string,
	title?:string,
	description?:string,
	content_type?:number
}
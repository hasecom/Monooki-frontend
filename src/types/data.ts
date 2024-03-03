export type CategoryType = {
	id:number
	name:string,
	class_name:number,
	attribute:string,
	category_type:number//親categoryId
}
export type TagType = {
	name:string,
	class_name:number,
	attribute:string,
	tag_type:number
}
import { NextPage } from "next";
import { Typography } from "@mui/material";
import { ReactNodeProp } from "@/types/common";
const CategoryTagsTitle:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}
const CategoryTitle:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="subtitle1" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}
const CategoryMainTitle:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}
const RecipeFlowHeading:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}
const RecipeHeading:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2,fontSize:'1.25rem'}}>{children}</Typography>
	)
}

export {CategoryTagsTitle,CategoryTitle,RecipeHeading,RecipeFlowHeading,CategoryMainTitle}
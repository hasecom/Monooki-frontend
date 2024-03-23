'use client'
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
const CategoryAndTagMainTitle:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}
const RecipeFlowHeading:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}
const RecipeFlowItemHeading:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="subtitle1" sx={{fontWeight:'bold',paddingY:1}}>{children}</Typography>
	)
}
const RecipeHeading:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2,fontSize:'1.25rem'}}>{children}</Typography>
	)
}
const RecipeListTitle:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="body1" sx={{fontSize:'1.15em',paddingY:2}}>{children}</Typography>
	)
}
const PageTitle:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography variant="h6" sx={{fontWeight:'bold',paddingY:2}}>{children}</Typography>
	)
}

export {CategoryTagsTitle,CategoryTitle,RecipeHeading,RecipeFlowHeading,RecipeFlowItemHeading,CategoryAndTagMainTitle,RecipeListTitle,PageTitle}
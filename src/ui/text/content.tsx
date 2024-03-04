'use client'
import { NextPage } from "next";
import { Typography } from "@mui/material";
import { ReactNodeProp } from "@/types/common";
const MainContentText:NextPage<ReactNodeProp> = ({children}) => {
	return (
		<Typography>{children}</Typography>
	)
}
export {MainContentText}
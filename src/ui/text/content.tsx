'use client'
import { NextPage } from "next";
import { Box } from "@mui/material";
import { ReactNodeProp } from "@/types/common";
import React from "react";
import MdxContent from "@/component/mdx/mdxContent";
const MainContentText: NextPage<ReactNodeProp> = ({ children }) => {

	return (
		<Box sx={{pt:3}}>
			<MdxContent>{children as string}</MdxContent>
		</Box>
	)
}
export { MainContentText }
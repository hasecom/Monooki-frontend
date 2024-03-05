'use client'
import { NextPage } from "next";
import { Box } from "@mui/material";
import { ReactNodeProp } from "@/types/common";
import React from "react";
import ReactMarkdown from 'react-markdown';
const MainContentText: NextPage<ReactNodeProp> = ({ children }) => {

	return (
		<Box>
			<ReactMarkdown>{children as string}</ReactMarkdown>
		</Box>
	)
}
export { MainContentText }
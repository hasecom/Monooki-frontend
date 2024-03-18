'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import MainLayout from "@/layout/mainLayout";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";

const TagLayout: NextPage<LayoutProps> = ({ children }) => {
	return (
		<>
			<MainLayout>
			<Box sx={{
				maxWidth:'650px',
				margin:'0 auto',
				paddingX:!useIsScreenSizeAbove('md') ? 3:1
			}}>
				{children}
				</Box>
			</MainLayout>
		</>
	)
}
export default TagLayout;
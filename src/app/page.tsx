'use client'
import MainLayout from "@/layout/mainLayout";
import TopList from "@/component/widget/topList";
import CategoryTabs from "@/component/widget/categoryTabs";
import { Box } from "@mui/material";
import { isScreenSizeAbove } from "@/util/mediaQuery";
export default function Home() {
	const isScreenSizeAboveSm = isScreenSizeAbove('sm');
	return (
		<MainLayout isBreadCrumbs={false}>
			<Box sx={isScreenSizeAboveSm ? 
			{ paddingX: "3vw", paddingY: "3vh" }:
			{ paddingY: "3vh" }
		}
			>
				<TopList />
				<CategoryTabs />
			</Box>
		</MainLayout>
	);
}

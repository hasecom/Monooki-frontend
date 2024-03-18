'use client'
import MainLayout from "@/layout/mainLayout";
import TopList from "@/component/widget/topList";
import CategoryTabs from "@/component/widget/categoryTabs";
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
export default function Home() {
	const isScreenSizeAboveSm = useIsScreenSizeAbove('sm');
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

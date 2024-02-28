'use client'
import MainLayout from "@/layout/mainLayout";
import TopList from "@/component/widget/topList";
import CategoryTabs from "@/component/widget/categoryTabs";
import { Box } from "@mui/material";
export default function Home() {
	return (
		<MainLayout isBreadCrumbs={false}>
			<Box sx={{ paddingX: "3vw", paddingY: "3vh" }}>
				<TopList />
				<CategoryTabs />
			</Box>
		</MainLayout>
	);
}

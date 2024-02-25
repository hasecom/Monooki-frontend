'use client'
import MainLayout from "@/layout/mainLayout";
import TopList from "@/component/widget/topList";
import CategoryTabs from "@/component/widget/categoryTabs";
export default function Home() {
  return (
		<MainLayout>
			<TopList />
			<CategoryTabs />
		</MainLayout>
  );
}

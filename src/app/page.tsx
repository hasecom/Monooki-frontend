import {  Service, assetLinks } from "@/constant/preset";
import HomeView from "./_home";
import { Metadata } from "next";
export default function Home() {
	return (
		<>
			<HomeView />
		</>
	);
}
const metaTitle = 'MONOOKI';
const metaDescription = 'モノ・コトを動画で紹介するサービスです。"';
export const metadata: Metadata = {
	metadataBase: new URL(Service.ServiceLink),
	title: metaTitle,
	description:metaDescription,
	openGraph: {
		type: "website",
		title: metaTitle,
		description:metaDescription,
		siteName: metaDescription,
		url: "",
		images: {
			url: Service.ServiceLink + assetLinks.ogImage,
			type: "image/png",
			width: 1200,
			height: 630,
			alt:Service.ServiceNameEn,
		},
	},
	twitter: {
		title:metaTitle,
		description:metaDescription,
		images: {
			url: Service.ServiceLink + assetLinks.ogImage,
			type: "image/png",
			width: 1200,
			height: 630,
			alt: Service.ServiceNameEn,
		},
	}
};
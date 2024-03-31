import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import { Metadata } from "next";
import { Service, assetLinks } from "@/constant/preset";

const CategoryParentLayout:NextPage<LayoutProps> = ({children}) => {
	return (
		<>
		{children}
		</>
	)
}
export default CategoryParentLayout;

const metaTitle = 'カテゴリ一覧　|　' + Service.ServiceNameEn;
const metaDescription = 'カテゴリ一覧ページです。見つけたい動画に合うカテゴリを選びましょう。';
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
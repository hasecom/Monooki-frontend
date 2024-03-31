'use client';
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./globals.css";
import { PreSetProvider } from "@/provider/preSetProvider";
import AppHead from "@/component/head/appHead";
const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const theme = createTheme();
	return (
		<html lang="ja">
			<PreSetProvider>
				<ThemeProvider theme={theme}>
					<head>
					{process.env.NEXT_PUBLIC_GA_ID && (
						<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
					)}
						<AppHead />
					</head>
					<body className={inter.className}>{children}</body>
				</ThemeProvider>
			</PreSetProvider>
		</html>
	);
}
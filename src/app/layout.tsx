'use client';
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./globals.css";
import AppHead from "@/component/head/appHead";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const theme = createTheme();
  return (
    <html lang="ja">
			<ThemeProvider theme={theme}>
				<head>
					<AppHead />
				</head>
      	<body className={inter.className}>{children}</body>
			</ThemeProvider>
    </html>
  );
}

'use client'
import { NextPage } from "next";
import { LayoutProps,mainLayoutOptionType } from "@/types/common";
import Header from "@/component/header/header";
import { Grid } from "@mui/material";
import SideBar from "@/component/sideBar/sideBar";
import { Box } from "@mui/system";
import { isScreenSizeAbove } from "@/util/mediaQuery";
import BasicBreadCrumbs from "@/ui/Breadcrumbs/basicBreadCrumbs";

const MainLayout: NextPage<LayoutProps & mainLayoutOptionType> = ({ children,isBreadCrumbs=true }) => {
	const isScreenSizeAboveSm = isScreenSizeAbove('sm');
	return (
		<>
			<Header />
			{isBreadCrumbs && (
				<BasicBreadCrumbs />
			)}
			<Grid container spacing={0} direction="row" sx={{
				height: '100vh',
				maxWidth: '1000px',
				margin:'0 auto',
				paddingTop:isScreenSizeAboveSm?'40px':'0'
			}}>
					<Grid item xs={12} md={8}>
						<Box>{children}</Box>
					</Grid>
					<Grid item xs={0} md={4}>
						<SideBar />
					</Grid>
			</Grid>
		</>
	)
}
export default MainLayout;
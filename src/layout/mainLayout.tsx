'use client'
import { NextPage } from "next";
import { LayoutProps, mainLayoutOptionType } from "@/types/common";
import { BreadCrumbProvider } from "@/provider/breadCrumbProvider";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import { Grid } from "@mui/material";
import SideBar from "@/component/sideBar/sideBar";
import { Box } from "@mui/system";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import BasicBreadCrumbs from "@/ui/Breadcrumbs/basicBreadCrumbs";
const MainLayout: NextPage<LayoutProps & mainLayoutOptionType> = ({ children, isBreadCrumbs = true }) => {
	const isScreenSizeAboveSm = useIsScreenSizeAbove('sm');
	return (
		<>
				<BreadCrumbProvider>
					<Header />
					{isBreadCrumbs && isScreenSizeAboveSm && (
						<BasicBreadCrumbs />
					)}
					<Grid container spacing={0} direction="row" sx={{
						height: 'auto',
						maxWidth: '1000px',
						margin: '0 auto',
						paddingTop: isScreenSizeAboveSm ? '40px' : '0'
					}}>
						<Grid item xs={12} md={8}>
							<Box>{children}</Box>
						</Grid>
						<Grid item xs={0} md={4}>
							<SideBar />
						</Grid>
					</Grid>
					{isBreadCrumbs && !isScreenSizeAboveSm && (
						<BasicBreadCrumbs />
					)}
					<Footer />
				</BreadCrumbProvider>
		</>
	)
}
export default MainLayout;
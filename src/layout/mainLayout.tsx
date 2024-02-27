'use client'
import { NextPage } from "next";
import { LayoutProps } from "@/types/common";
import Header from "@/component/header/header";
import { Container, Grid } from "@mui/material";
import SideBar from "@/component/sideBar/sideBar";
import { Box } from "@mui/system";

const MainLayout: NextPage<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
				<Grid container spacing={0} direction="row" sx={{
					height:'100vh'
				}}>
					<Grid item xs={12} md={9}>
						<Box>
							{children}
						</Box>
					</Grid>
					<Grid item xs={0} md={3}>
						<SideBar />
					</Grid>
				</Grid>
		</>
	)
}
export default MainLayout;
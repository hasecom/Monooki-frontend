import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { CategoryLink } from '@/ui/link/categoryLink';
import { isScreenSizeAbove } from "@/util/mediaQuery";
import { Heading,categoryContents,purposeContents } from '@/constant/preset';

const MainAccordion = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);
	if(!isScreenSizeAbove('sm'))return (<></>);//スマホサイズは非表示

	const handleMouseEnter = (num: number) => {
		setSelectedTab(num);
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	const NavTab = ({ label, num }: any) => {
		return (
			<Tab
				label={label}
				component="div"
				onMouseEnter={() => { handleMouseEnter(num) }}
			/>
		);
	};
	const LinkTab = ({ label, link }: { label: string, link: string }) => {
		return (
			<Tab
				label={label}
				component="a"
				href={link}
			/>
		);
	};
	return (
		<Box onMouseLeave={() => { handleMouseLeave() }}>
			<Tabs
				value={isHovered ? selectedTab : false}
				TabIndicatorProps={{
					style: {
						backgroundColor: "#b2bec3"
					}
				}}
			>
				<NavTab label={Heading.Category.CategorySearch} num={0} />
				<NavTab label={Heading.Category.PurposeSearch} num={1} />
				<NavTab label={Heading.Common.AboutService} num={2} />
				<LinkTab label="Page One" link={'https://app.hasethblog.com'} />
			</Tabs>
			{isHovered && selectedTab === 0 && (
				<>
					<CategoryLink category={categoryContents}  />
				</>
			)}
			{isHovered && selectedTab === 1 && (
				<>
				<CategoryLink category={purposeContents}  />
				</>
			)}
		</Box>
	);
};

export default MainAccordion;

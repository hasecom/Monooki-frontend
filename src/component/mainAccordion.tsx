import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { CategoryLink } from '@/ui/link/categoryLink';

const MainAccordion = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);

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
				textColor="primary"
			>
				<NavTab label="カテゴリから探す" num={0} />
				<NavTab label="目的から探す" num={1} />
				<NavTab label="サービスについて" num={2} />
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


const categoryContents = [
	{ name: 'LINE' },
	{ name: 'X' },
	{ name: 'Youtube' },
	{ name: 'Instagram' },
	{ name: 'スマホ' },
	{ name: 'PC' }
]
const purposeContents = [
	{name:'アプリが起動しない'},
	{name:'退会したい'},
	{name:'会員登録したい'},
	{name:'スマホが起動しない'}
]
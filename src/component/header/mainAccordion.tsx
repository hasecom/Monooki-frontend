'use client'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { CategoryLink } from '@/ui/link/categoryLink';
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { Heading } from '@/constant/preset';
import { NextPage } from 'next';
import { CategoryType, TagType } from '@/types/data';
import { categoryFilterByClassName,tagFilterByTagType } from '@/util/formatter';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constant/preset';
type MainAccordionProps = {
	category:CategoryType[] | null,
	tag:TagType[] | null 
}
const MainAccordion:NextPage<MainAccordionProps> = ({category,tag}) => {
	const router = useRouter();

	const filteredCategies = categoryFilterByClassName({categories:category,className:3})
	const filteredTags = tagFilterByTagType({tags:tag,tagType:2})
	const [isHovered, setIsHovered] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);
	if(!useIsScreenSizeAbove('sm'))return (<></>);//スマホサイズは非表示

	const handleMouseEnter = (num: number) => {
		setSelectedTab(num);
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	type NavTabProps = {
		label:string,
		num:number,
		click?:()=>void
	}
	const NavTab = ({ label, num,click = ()=>{} }: NavTabProps) => {
		return (
			<Tab
				label={label}
				component="div"
				onMouseEnter={() => { handleMouseEnter(num) }}
				onClick={()=>{ click() }}
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
				<NavTab label={Heading.Category.CategorySearch} num={0} click={()=>{router.push(PAGES.CATEGORY_LIST_PAGE)}} />
				<NavTab label={Heading.Category.PurposeSearch} num={1} />
				<NavTab label={Heading.Common.AboutService} num={2} />
				<LinkTab label="Page One" link={'https://app.hasethblog.com'} />
			</Tabs>
			{isHovered && selectedTab === 0 && (
				<>
					<CategoryLink category={filteredCategies}  />
				</>
			)}
			{isHovered && selectedTab === 1 && (
				<>
				<CategoryLink category={filteredTags}  />
				</>
			)}
		</Box>
	);
};

export default MainAccordion;

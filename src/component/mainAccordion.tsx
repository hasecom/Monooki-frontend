import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Tabs } from '@mui/material';


const MainAccordion = () => {
	const [isHovered, setIsHovered] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleMouseEnter = (num:number) => {
		setSelectedTab(num);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
	const NavTab = ({ label,num }:any) => {
		return (
			<Tab
				label={label}
				component="div"
				onMouseEnter={()=>{handleMouseEnter(num)}}
			/>
		);
	};
	const LinkTab = ({ label,link }:{label:string,link:string}) => {
		return (
			<Tab
				label={label}
				component="a"
				href={link}
			/>
		);
	};
	return (
    <Box onMouseLeave={()=>{handleMouseLeave()}}>
      <Tabs
        value={isHovered ? selectedTab : false}
        textColor="primary"
      >
        <NavTab label="サービス名から探す" num={0} />
        <NavTab label="目的から探す" num={1} />
				<NavTab label="サービスについて" num={2} />
				<LinkTab label="Page One" link={'https://app.hasethblog.com'} />
      </Tabs>
      {isHovered && selectedTab === 0 && (
        <Box>
          <p>Content for Tab 1</p>
        </Box>
      )}
      {isHovered && selectedTab === 1 && (
        <Box>
          <p>Content for Tab 2</p>
        </Box>
      )}
    </Box>
  );
};


export default MainAccordion;
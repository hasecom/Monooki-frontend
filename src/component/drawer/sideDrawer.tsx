import { ReactNode } from 'react';
import { NextPage } from 'next';
import Drawer from '@mui/material/Drawer';
import { Accordion, List, ListItem, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Heading } from '@/constant/preset';
import { categoryContents, purposeContents } from '@/constant/preset';
import { SideDrawerProps, categoryLinkProps } from '@/types/common';

const SideDrawerAccordion = ({ heading, children }: { heading: string, children: ReactNode }) => {
	return (
		<Accordion square={true}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1-content"
				id="panel1-header"
			>
				{heading}
			</AccordionSummary>
			<AccordionDetails>
				{children}
			</AccordionDetails>
		</Accordion>
	)
}
const SideDrawerAccordionDetails: NextPage<categoryLinkProps> = ({ category, length = 5 }) => {
	return (
		<>
			{category.slice(0, length).map((item, index) => (
				<ListItemButton component="a" key={index} href="#simple-list" >
					<ListItemText
						primary={item.name}
						primaryTypographyProps={{
							fontSize: 14,
							fontWeight: 'medium',
							lineHeight: '15px',
							mb: '3px',
							whiteSpace: 'nowrap',
							overflow :'hidden', 
							textOverflow: 'ellipsis' 
						}} />
				</ListItemButton>
			))}
		</>
	)
}

const SideDrawer: NextPage<SideDrawerProps> = (props) => {
	return (
		<Drawer open={props.isOpen} onClose={props.toggle}>
			<List sx={{ maxWidth: '250px' }}>
				<SideDrawerAccordion heading={Heading.Category.CategorySearch}>
					<SideDrawerAccordionDetails category={categoryContents} />
				</SideDrawerAccordion>
				<SideDrawerAccordion heading={Heading.Category.PurposeSearch}>
					<SideDrawerAccordionDetails category={purposeContents} />
				</SideDrawerAccordion>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}
export default SideDrawer;
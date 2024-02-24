import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  boldTitle: {
    fontWeight: 'bold',
  },
}));
const TopList = () => {
	const classes = useStyles();
	return (
		<>
		<Box sx={{overflowX:'scroll'}}>
			<ImageList sx={{ width: 500, height: 250}}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=248&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
						/>
						<ImageListItemBar
							title={item.title}
							position="below"
							classes={{title:classes.boldTitle}}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
		</>
	)
}
export default TopList;

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'LINEのサムネイルの変更の仕方',
		date: '2023年2月12日',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'LINEの音楽の設定方法',
		date: '2022年2月1日',
	}
];
'use client'
import { Box } from "@mui/material";
import { isScreenSizeAbove } from "@/util/mediaQuery";
import { getWindowSize } from "@/hooks/getWindowSize";
import { NextPage } from "next";

type RecipeVideoProps = {
	videoUrl:string
}
const RecipeVideo:NextPage<RecipeVideoProps> = ({videoUrl}) => {
	const { height, width } = getWindowSize();
	return (
		<>
			<Box sx={{ maxWidth: '560px', maxHeight: '560px',minWidth:"250px",minHeight:'250px' }}>
				<iframe 
					width={isScreenSizeAbove('sm')? "560" : width } 
					height={isScreenSizeAbove('sm')? "560" : width } 
					src={videoUrl}
					title="YouTube video player" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					>
				</iframe>
			</Box>
		</>
	)
}
export default RecipeVideo;


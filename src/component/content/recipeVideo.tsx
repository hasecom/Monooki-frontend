'use client'
import { Box } from "@mui/material";
import { useIsScreenSizeAbove } from "@/hooks/useMediaQuery";
import { useGetWindowSize } from "@/hooks/useGetWindowSize";
import { NextPage } from "next";

type RecipeVideoProps = {
	videoUrl:string
}
const RecipeVideo:NextPage<RecipeVideoProps> = ({videoUrl}) => {
	const { height, width } = useGetWindowSize();
	return (
		<>
			<Box sx={{ maxWidth: '560px', maxHeight: '560px',minWidth:"250px",minHeight:'250px' }}>
				<iframe 
					width={useIsScreenSizeAbove('sm')? "560" : width } 
					height={useIsScreenSizeAbove('sm')? "560" : width } 
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


'use client'
import { Box } from "@mui/material";
import { isScreenSizeAbove } from "@/util/mediaQuery";
const RecipeVideo = () => {
	return (
		<>
			<Box sx={{ maxWidth: '560px', maxHeight: '560px',minWidth:"250px",minHeight:'250px' }}>
				<iframe 
					width={isScreenSizeAbove('md')? "560" : "100%" } 
					height={isScreenSizeAbove('md')? "560" : "350" } 
					src="https://www.youtube.com/embed/wlg0bcJUSb4?si=z-D9LC4bosqGdjzT" 
					title="YouTube video player" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					>
				</iframe>
			</Box>
		</>
	)
}
export default RecipeVideo;
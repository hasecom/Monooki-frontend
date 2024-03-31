import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { RecipeType } from '@/types/data'
import {
	SelectedSnapDisplay,
	useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ImageListItem, ImageListItemBar } from '@mui/material'
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constant/preset'
import { makeStyles } from '@material-ui/core';

type PropType = {
	slides: RecipeType[]
	options?: EmblaOptionsType
}
const useStyles = makeStyles((theme) => ({
	boldTitle: {
		fontWeight: 'bold',
	},
}));
const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	const router = useRouter();
	const classes = useStyles();
	const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((recipe, index) => (
						<div className="embla__slide" key={index}>
							<ImageListItem key={index}>
								<img
									srcSet={`${recipe.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
									src={`${recipe.thumbnailUrl}?w=248&fit=crop&auto=format`}
									alt={recipe.title}
									loading="lazy"
									onClick={() => { router.push(PAGES.RECIPE_PAGE + recipe.uid) }}
								/>
								{/* <ImageListItemBar
									title={recipe.title}
									position="below"
									classes={{ title: classes.boldTitle }}
								/> */}
							</ImageListItem>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default EmblaCarousel

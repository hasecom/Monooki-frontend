'use client'
import { Chip } from "@mui/material"
const CategoryTagChip= ({label,link}:{label:string,link:string}) => {
	return (
		<Chip label={label}  sx={{marginRight:1,marginBottom:1}}  component="a" href={link} clickable />
	)
}
const CategoryTagOfRecipe = ({label}:{label:string}) => {
	return (
		<Chip label={label} sx={{marginRight:1,marginBottom:1}} />
	)
}

export {CategoryTagChip,CategoryTagOfRecipe}

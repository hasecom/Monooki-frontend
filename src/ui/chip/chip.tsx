import { Chip } from "@mui/material"
const CategoryTagChip= ({label}:{label:string}) => {
	return (
		<Chip label={label} sx={{marginRight:1,marginBottom:1}} />
	)
}

export {CategoryTagChip}

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'

import { usePresetContext } from '@/provider/preSetProvider';
const AppHead = () =>  {
	
	const { category,tag } = usePresetContext();
	const [ogp,setOgp] = useState({
		title:"",
		description:"",
		image:""
	});
	useEffect(() => {
		setOgp(prevState => ({
			...prevState,
			title:category?.data ? category.data[0].name:""
	}));
  }, [category])

	return (
			<head>
			  <title>{ogp.title}</title>
        <meta property="og:title" content={ogp.title} />
        <meta property="og:site_name" content={ogp.title} />
        <meta property="og:description" content={ogp.description} />
        <meta property="og:image" content={ogp.image ? ogp.image : ""} />
				<meta name="robots" content="index, follow" />
			</head>
	)
}

export default AppHead;
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import usePageSet from "@/hooks/usePageSet";

const AppHead = () =>  {
	const { categoryData, recipeViewData, recipeViewCategory } = usePageSet();
	const [ogp,setOgp] = useState({
		title:"",
		description:"",
		image:""
	});
	useEffect(() => {
		setOgp(prevState => ({
			...prevState,
			title:categoryData ? categoryData[0].name:""
	}));
  }, [categoryData, recipeViewData, recipeViewCategory])

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
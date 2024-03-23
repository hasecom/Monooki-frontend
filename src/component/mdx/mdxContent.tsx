import { ReactNodeProp } from "@/types/common";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { H1,H2,Li } from "@/ui/mdx/mdxElement";
const MdxContent:NextPage<ReactNodeProp> = ({children}) => {
	const components = {
		h1:({...props})=> <H1>{props.children}</H1>,
		h2:({...props})=> <H2>{props.children}</H2>,
		li:({...props})=><Li>{props.children}</Li>
	};
	return (
		 <ReactMarkdown components={components}>{children as string}</ReactMarkdown>
	)
}
export default MdxContent;
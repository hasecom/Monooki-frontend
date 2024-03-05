// next.config.js
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX =nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});
const nextConfig = {
  output: 'export',
  trailingSlash: true,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
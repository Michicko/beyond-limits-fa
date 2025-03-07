import ArticleList from "@/components/main/Article/ArticleList";
import ArticleLayout from "@/components/main/Layouts/ArticleLayout";
import { articles } from "@/lib/placeholder-data";
import React from "react";

const links = [
	{ name: "Academy news", href: "/news" },
	{ name: "Beyon limits tv", href: "/beyond-tv" },
];

function News() {
	return (
		<ArticleLayout links={links} theme="theme-1" bg="trans">
			<div className="main-container">
				<ArticleList articles={articles} />
				{/* pagination */}
			</div>
		</ArticleLayout>
	);
}

export default News;

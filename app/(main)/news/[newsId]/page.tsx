import React from "react";

function NewsArticle({ params }: { params: { newsId: string } }) {
	return (
		<div>
			<h1>NewsArticle {params.newsId}</h1>
		</div>
	);
}

export default NewsArticle;

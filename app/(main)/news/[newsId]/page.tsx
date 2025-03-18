import Header from "@/components/main/Header/Header";
import LayoutHeader from "@/components/main/Layouts/CompetitionsLayout/LayoutHeader";
import LayoutMain from "@/components/main/Layouts/CompetitionsLayout/LayoutMain";
import Heading from "@/components/main/Typography/Heading";
import Text from "@/components/main/Typography/Text";
import React from "react";
import styles from "../News.module.css";
import clsx from "clsx";
import Article from "@/components/main/Article/Article";
import { articles } from "@/lib/placeholder-data";
import SocialShareLinks from "@/components/main/Social/SocialShareLinks";
import ArticleCategory from "@/components/main/Article/ArticleCategory";

function NewsArticle({ params }: { params: { newsId: string } }) {
  const article = articles.find((article) => article.id === params.newsId);

  return (
    <>
      <Header
        bg={"/images/under-19-bg.png"}
        alt="2024 / 2025 ongoing campaign"
        overlay={true}
      >
        <LayoutHeader article={true}>
          <>
            <Heading
              level={1}
              letterCase="upper"
              type="secondary"
              center={true}
            >
              {article?.title}
            </Heading>
            <Text
              letterCase="upper"
              weight="bold"
              size="md"
              color={"secondary"}
            >
              December 15, 2025
            </Text>
            {article && article.category && (
              <ArticleCategory category={article.category} />
            )}
          </>
        </LayoutHeader>
      </Header>
      <LayoutMain>
        <div className={clsx(styles["article-container"], styles.article)}>
          <div className={clsx(styles["article-content__box"])}>
            {article && (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            )}
            <SocialShareLinks
              text={`Check out this article: ${article?.title}`}
              url={`/news/${params.newsId}`}
            />
          </div>
          <div className={clsx(styles["articles__box"])}>
            <Heading level={2} letterCase="upper" type="secondary">
              Other Articles
            </Heading>
            <div className={clsx(styles["col-3"])}>
              {articles.slice(0, 3).map((article) => {
                return <Article article={article} key={article.id} />;
              })}
            </div>
          </div>
        </div>
      </LayoutMain>
    </>
  );
}

export default NewsArticle;

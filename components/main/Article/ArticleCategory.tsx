import { Article_Cateory } from "@/lib/definitions";
import styles from "./Article.module.css";
import clsx from "clsx";
import slugify from "slugify";

const ArticleCategory = ({ category }: { category: Article_Cateory }) => {
  return (
    <div
      className={clsx(
        styles.article__category,
        styles[slugify(category.toLowerCase())],
      )}
    >
      <p>{category}</p>
    </div>
  );
};

export default ArticleCategory;

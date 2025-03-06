import React from "react";
import styles from "./VideoCard.module.css"; // Assuming CSS module is in the same folder
import { IHighlight } from "@/lib/definitions";
import { FaPlay } from "react-icons/fa";
import ImageComp from "@/components/ImageComp/ImageComp";
import clsx from "clsx";

const VideoCard = ({ highlight }: { highlight: IHighlight }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.thumbnailWrapper}>
        <ImageComp
          alt={highlight.title}
          image={highlight.thumbnail}
          placeholder={highlight.thumbnail}
          priority={false}
        />
      </div>
      <div className={styles.buttonContainer}>
        <h4 className={clsx(styles["videocard-title"])}>{highlight.title}</h4>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={highlight.videoUrl}
        className={styles["videocard-link"]}
      >
        <FaPlay className={styles["play-icon"]} />
      </a>
    </div>
  );
};

export default VideoCard;

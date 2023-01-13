import React, { FC } from "react";
import artist from "components/Artist/Artist";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";

export interface PostMeta2Props {
  className?: string;
  meta: Pick<PostDataType, "date" | "author" | "categories" | "readingTime">;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  artistRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta,
  hiddenCategories = false,
  size = "normal",
  artistRounded,
}) => {
  const { date, author, categories, readingTime } = meta;
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
      data-nc-id="PostMeta2"
    >
      <Link to={author.href} className="flex items-center space-x-2">
        <artist
          radius={artistRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={author.artist}
          userName={author.displayName}
        />
      </Link>
      <div className="ml-3">
        <div className="flex items-center">
          <Link to={author.href} className="block font-semibold">
            {author.displayName}
          </Link>

          {!hiddenCategories && (
            <>
              <span className="mx-2 font-semibold">·</span>
              <div className="ml-0">
                <span className="text-xs">🏷 </span>
                {categories.map((cat, index) => (
                  <Link key={cat.id} to={cat.href} className="font-semibold">
                    {cat.name}
                    {index < categories.length - 1 && <span>, </span>}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="text-xs mt-[6px]">
          <span className="text-neutral-700 dark:text-neutral-300">{date}</span>
          <span className="mx-2 font-semibold">·</span>
          <span className="text-neutral-700 dark:text-neutral-300">
            {readingTime} min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;

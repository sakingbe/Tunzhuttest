import React, { FC } from "react";
import { PostAuthorType } from "data/types";
import { NavLink } from "react-router-dom";
import artist from "components/Artist/Artist";

export interface CardAuthorProps {
  className?: string;
  author: PostAuthorType;
}

const CardAuthor: FC<CardAuthorProps> = ({ className = "", author }) => {
  const { displayName, href = "/", artist, jobName } = author;
  return (
    <NavLink
      to={href}
      className={`nc-CardAuthor flex items-center ${className}`}
      data-nc-id="CardAuthor"
    >
      <artist
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-4"
        radius="rounded-full"
        imgUrl={artist}
        userName={displayName}
      />
      <div>
        <h2
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {displayName}
        </h2>
        <span
          className={`block mt-[2px] text-xs text-neutral-500 dark:text-neutral-400`}
        >
          {jobName}
        </span>
      </div>
    </NavLink>
  );
};

export default CardAuthor;

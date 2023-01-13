import { artistColors } from "contains/contants";
import { artistImgs, _getArtistRd } from "contains/infomation";
import React, { FC } from "react";

export interface artistProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
}

const artist: FC<artistProps> = ({
  containerClassName = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-md",
  imgUrl = _getArtistRd(),
  userName,
}) => {
  const url = imgUrl || "";
  const name = userName || "John Doe";
  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % artistColors.length
    );
    return artistColors[backgroundIndex];
  };

  return (
    <div
      className={`wil-artist relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={url}
          alt={name}
        />
      )}
      <span className="wil-artist__name">{name[0]}</span>
    </div>
  );
};

export default artist;

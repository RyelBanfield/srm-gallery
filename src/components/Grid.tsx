"use client";

import { type FileObject } from "imagekit/dist/libs/interfaces";

import ImageItem from "./ImageItem";

type Props = {
  urlEndpoint: string;
  images: FileObject[];
};

const Grid = ({ urlEndpoint, images }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {images.map((image, index) => (
        <ImageItem
          key={image.fileId}
          image={image}
          urlEndpoint={urlEndpoint}
          index={index}
        />
      ))}
    </div>
  );
};

export default Grid;

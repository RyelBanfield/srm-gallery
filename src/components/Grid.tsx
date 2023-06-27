/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { type FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-react";

type Props = {
  urlEndpoint: string;
  images: FileObject[];
};

const Grid = ({ urlEndpoint, images }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {images.map((image) => (
        <div key={image.fileId}>
          {/* @ts-ignore */}
          <IKImage
            alt=""
            urlEndpoint={urlEndpoint}
            path={image.filePath}
            transformation={[{ width: "1080", height: "1920" }]}
            width={1080}
            height={1920}
            lqip={{ active: true, quality: 40, blur: 5 }}
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;

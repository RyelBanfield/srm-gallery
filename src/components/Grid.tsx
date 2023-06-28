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
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5">
      {images.map((image) => (
        <div key={image.fileId}>
          {/* @ts-ignore  */}
          <IKImage
            alt=""
            urlEndpoint={urlEndpoint}
            path={image.filePath}
            transformation={[{ height: "1000" }]}
            height={1000}
            lqip={{ active: true, quality: 40, blur: 5 }}
            loading="lazy"
            className="mb-6 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;

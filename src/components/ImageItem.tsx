/* eslint-disable @typescript-eslint/ban-ts-comment */

import { motion } from "framer-motion";
import { type FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-react";
import { useInView } from "react-intersection-observer";

type Props = {
  image: FileObject;
  urlEndpoint: string;
  index: number;
};

const ImageItem = ({ image, urlEndpoint, index }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {/* @ts-ignore  */}
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
    </motion.div>
  );
};

export default ImageItem;

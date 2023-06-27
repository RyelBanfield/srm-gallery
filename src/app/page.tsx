import ImageKit from "imagekit";

import Grid from "@/components/Grid";
import Modal from "@/components/Modal";

const Home = async () => {
  const urlEndpoint = "https://ik.imagekit.io/zuge4mgxf";

  const imagekit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY as string,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY as string,
    urlEndpoint,
  });

  const imageUrls = await imagekit.listFiles({});

  return (
    <main className="flex flex-col items-center justify-center px-3">
      <header className="p-6">
        <h1 className="text-center text-2xl font-bold">SRM Gallery</h1>
      </header>

      <Modal />

      <Grid urlEndpoint={urlEndpoint} images={imageUrls} />
    </main>
  );
};

export default Home;

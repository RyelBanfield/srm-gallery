import ImageKit from "imagekit";

import Grid from "@/components/Grid";

const Home = async () => {
  const urlEndpoint = "https://ik.imagekit.io/zuge4mgxf";

  const imagekit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY as string,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY as string,
    urlEndpoint,
  });

  const imageUrls = await imagekit.listFiles({});

  return (
    <main className="p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">Gallery</h1>

      <Grid urlEndpoint={urlEndpoint} images={imageUrls} />
    </main>
  );
};

export default Home;

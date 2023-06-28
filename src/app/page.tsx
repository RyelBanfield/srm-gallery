import { type FileObject } from "imagekit/dist/libs/interfaces";

import Grid from "@/components/Grid";
import Modal from "@/components/Modal";

const Home = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const imageUrlsResponse = await fetch(`${baseUrl}/api/image-urls`, {
    next: { revalidate: 86400 },
  });
  const imageUrls = (await imageUrlsResponse.json()) as FileObject[];

  return (
    <main className="min-h-screen px-3">
      <header className="p-6">
        <h1 className="text-center text-2xl font-bold">SRM Gallery</h1>
      </header>

      <Modal />

      <Grid urlEndpoint="https://ik.imagekit.io/zuge4mgxf" images={imageUrls} />
    </main>
  );
};

export default Home;

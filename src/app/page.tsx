import { type FileObject } from "imagekit/dist/libs/interfaces";

import Grid from "@/components/Grid";
import Modal from "@/components/Modal";

const Home = async () => {
  const imageUrlsResponse = await fetch(
    "https://srm-gallery.vercel.app/api/image-urls"
  );

  const imageUrls = (await imageUrlsResponse.json()) as FileObject[];

  return (
    <div className="min-h-screen px-3">
      <header className="p-6">
        <h1 className="text-center text-2xl font-bold">SRM Gallery</h1>
      </header>

      <main className="mb-6">
        <Modal />

        <Grid
          urlEndpoint="https://ik.imagekit.io/zuge4mgxf"
          images={imageUrls}
        />
      </main>

      <footer className="p-12">
        <p className="text-center text-sm">
          Built with 🔥 by{" "}
          <a
            href="https://ryelbanfield.me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Ryel
          </a>{" "}
          at{" "}
          <a
            href="https://rcbsoftware.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            RCB Software
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;

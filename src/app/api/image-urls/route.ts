import ImageKit from "imagekit";

export async function GET() {
  try {
    const urlEndpoint = "https://ik.imagekit.io/zuge4mgxf";

    const imagekit = new ImageKit({
      privateKey: process.env.IMAGE_KIT_PRIVATE_KEY as string,
      publicKey: process.env.IMAGE_KIT_PUBLIC_KEY as string,
      urlEndpoint,
    });

    const imageUrls = await imagekit.listFiles({});

    return new Response(JSON.stringify(imageUrls), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}

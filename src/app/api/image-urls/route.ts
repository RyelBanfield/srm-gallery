import ImageKit from "imagekit";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const urlEndpoint = "https://ik.imagekit.io/zuge4mgxf";

    const imagekit = new ImageKit({
      privateKey: process.env.IMAGE_KIT_PRIVATE_KEY as string,
      publicKey: process.env.IMAGE_KIT_PUBLIC_KEY as string,
      urlEndpoint,
    });

    const imageUrls = await imagekit.listFiles({});

    return NextResponse.json(imageUrls);
  } catch (error) {
    return NextResponse.json(error);
  }
}

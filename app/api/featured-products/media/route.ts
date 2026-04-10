import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const featuredSet = await prisma.featured_products.findUnique({
      where: { id },
      include: {
        featured_products_rels: {
          include: {
            product: {
              include: {
                product_media: true,
                sub_category: true,
              },
            },
          },
          orderBy: {
            order: "asc",
          },
        },
      },
    });

    if (!featuredSet) {
      return NextResponse.json(
        { message: "Featured set not found" },
        { status: 404 },
      );
    }

    const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_PATH_URL ?? "";

    const data = featuredSet.featured_products_rels
      .map((rel) => {
        const product = rel.product;
        return {
          src: product?.product_media?.url
            ? `${IMAGE_BASE_URL}${product.product_media.url}`
            : null,
          title: product?.nama ?? "",
          desc: product?.sub_category?.sub_kategori ?? "",
        };
      })
      .filter((item) => item.src !== null);

    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.error("GET /api/featured-products/media error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

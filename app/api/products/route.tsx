import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.max(Number(searchParams.get("limit")) || 10, 1);
    const offset = (page - 1) * limit;

    const kategori = searchParams.get("kategori");
    const sub_kategori = searchParams.getAll("sub_kategori[]");
    const search = searchParams.get("search");

    const where: any = {};

    if (kategori) {
      where.category = {
        kategori: {
          equals: kategori,
          mode: "insensitive",
        },
      };
    }

    if (sub_kategori.length > 0) {
      where.sub_category = {
        sub_kategori: {
          in: sub_kategori,
          mode: "insensitive",
        },
      };
    }

    if (search) {
      where.nama = {
        contains: search,
        mode: "insensitive",
      };
    }

    const total = await prisma.product.count({ where });

    const products = await prisma.product.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        nama: true,
        product_media: {
          select: {
            url: true,
            alt: true,
          },
        },
        category: {
          select: {
            kategori: true,
          },
        },
        sub_category: {
          select: {
            sub_kategori: true,
          },
        },
      },
    });

    const data = products.map(
      ({ product_media, category, sub_category, ...item }) => ({
        ...item,
        image_url: product_media?.url ?? null,
        image_alt: product_media?.alt ?? null,
        category: category.kategori ?? null,
        sub_category: sub_category?.sub_kategori ?? null,
      }),
    );

    const totalPages = Math.ceil(total / limit);
    const from = total === 0 ? 0 : offset + 1;
    const to = Math.min(offset + data.length, total);

    return NextResponse.json({
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        range: { from, to },
      },
    });
  } catch (error) {
    console.error("GET /api/produk error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

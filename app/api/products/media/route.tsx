import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.max(Number(searchParams.get("limit")) || 10, 1);

    const offset = (page - 1) * limit;

    const total = await prisma.product_media.count();

    const data = await prisma.product_media.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        created_at: "desc",
      },
    });

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
        range: {
          from,
          to,
        },
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

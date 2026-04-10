import { prisma } from "@/lib/prisma";
import { equal } from "assert";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const kategori = searchParams.get("kategori");
    const where: any = {};
    if (kategori) {
      where.category = {
        kategori: {
          equals: kategori,
          mode: "insensitive",
        },
      };
    }
    const subCategory = await prisma.sub_category.findMany({
      where,
      select: {
        id: true,
        sub_kategori: true,
        category: {
          select: {
            id: true,
            kategori: true,
          },
        },
      },
    });
    const data = subCategory.map(({ category, ...item }) => ({
      subCategoryId: item.id ?? null,
      categoryId: category.id ?? null,
      category: category.kategori ?? null,
      sub_category: item.sub_kategori ?? null,
    }));
    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.error("GET /api/sub-categories error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

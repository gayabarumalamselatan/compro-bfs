import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const featuredSets = await prisma.featured_products.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json({
      data: featuredSets,
    });
  } catch (error) {
    console.error("GET /api/featured-products error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

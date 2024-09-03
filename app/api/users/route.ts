import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json(
    { message: "Hiện thị tất cả các Id" },
    { status: 200 }
  );
}
export async function DELETE(request: NextRequest) {
  const user = await prisma.user.deleteMany();
  return NextResponse.json(
    { message: "Xoá tất cả các Id" },
    { status: 200 }
  );
}



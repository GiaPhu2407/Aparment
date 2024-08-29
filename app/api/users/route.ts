import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json({ user, message: "Oke" }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const user = await prisma.user.deleteMany();
  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const body = await request.json();

  const UserSchema = z.object({
    email: z.string().email({ message: "Email không tông tại" }),
    name: z
      .string()
      .min(8, { message: "Tên phải dài hơn 8 ký tự" })
      .max(255, { message: "Tên không được dài quá 255 ký tự" }),
  });

  const Check = UserSchema.safeParse({
    email: body.email,
    name: body.name,
  });
  if (!Check.success) {
    return NextResponse.json(Check.error.errors, { status: 200 });
  } else {
    const ue = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (ue == null) {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
        },
      });
      return NextResponse.json(
        { user, message: "Thêm thành công" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Email đã tồn tại" },
        { status: 400 }
      );
    }
  }
}

import prisma from "@/prisma/client";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// 1. Lấy tất cả các users
export async function GET() {
  const user = await prisma.user.findMany();

  return NextResponse.json(
    { user, message: `OK` },
    { status: 200, statusText: "Gia Phu oKE" }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const UserSchema = z.object({
    email: z.string().email({ message: "Email khong hop le" }),
    name: z
      .string()
      .min(8, { message: "Tên cần dài hơn hoặc bằng 8 kí tự" })
      .max(255, { message: "Tên có độ dài tối đa là 255 kí tự" }),
  });

  const userValidateCheck = UserSchema.safeParse({
    email: body.email,
    name: body.name,
  });

  if (!userValidateCheck.success) {
    return NextResponse.json(userValidateCheck.error.errors, { status: 200 });
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
        { user, message: `Thêm mới thành công` },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Email đã tồn tại" },
        { status: 200 }
      );
    }
    //   // c. Tiến hành thêm mới dữ liệu vào DB sử dụng prisma client
    //   const user = await prisma.user.create({
    //     data: {
    //       email: body.email,
    //       name: body.name,
    //     },
    //   });
    //   //d. Trả về kết quả là dữ liệu vừa được tạo cùng với status:201
    //   return NextResponse.json(
    //     { user, message: `Thêm mới thành công` },
    //     { status: 201 }
    //   );
    // }
  }
}



//3.Xoá tất cả các users
export async function DELETE(request: NextRequest) {
  const user = await prisma.user.deleteMany();
  return NextResponse.json(
    { user, message: `Xoá tất cả user` },
    { status: 200 }
  );
}

//zod để kiểm tra tính hợp lệ của dữ liệu

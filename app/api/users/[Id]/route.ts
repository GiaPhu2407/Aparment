import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import UserSchema from "@/app/llb/zod_schema/route";
import { USER_NOT_EXIST } from "@/app/llb/constants";

// 1. getUserById - dựa trên id trả về thông tin của user

//2 deleteUserById - xoá user dựa trên id

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { Id: string } }
// ) {
//   const userId = parseInt(params.Id);
//   const ue = await prisma.user.findUnique({ where: { email: "", name: "" } });
//   if (ue === null) {
//     return NextResponse.json(
//       { message: `Khong co du lieu de xoa` },
//       { status: 200 }
//     );
//   } else {
//     const user = await prisma.user.delete({ where: { id: userId } });
//     return NextResponse.json(
//       { user, message: `API deletePostById: ${params.Id}` },
//       { status: 200, statusText: "The post is deleted successfully" }
//     );
//   }
// }

export async function GET(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const userId = parseInt(params.Id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return NextResponse.json(
    { user, message: `Hien thi Id : ${params.Id} thành công` },
    { status: 200, statusText: "Gia Phu Perfect" }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const userId = Number(params.Id);
  try {
    const deleteUser = await prisma.user.delete({
      where: { id: userId },
    });
    return NextResponse.json({ deleteUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error_code: USER_NOT_EXIST.error_code, cause: USER_NOT_EXIST.message },
      { status: 400 }
    );
  }
}

//3 updateUserById - cập nhật dự liệu cho user id( dữ liệu mới trong request body)
// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { Id: string } }
// ) {
//   const userId = parseInt(params.Id);
//   const user = await prisma.user.update({
//     where: { id: userId },
//     data: { name: "Viet Thanh", email: "caongogiaphu@gamil.com" },
//   });
//   return NextResponse.json(
//     { user, message: `API deletePostById: ${params.Id}` },
//     { status: 200, statusText: "The post is deleted successfully" }
//   );
// }

export async function PUT(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const userId = parseInt(params.Id);
  const body = await request.json();
  // try {
  // Read and parse data from request body

  // Validate the incoming data against UserSchema
  const userValidateCheck = UserSchema.safeParse({
    email: body.email,
    name: body.name,
  });

  if (!userValidateCheck.success) {
    
    return NextResponse.json(userValidateCheck.error.errors, { status: 400 });
  }

  // Check if the email already exists for another user
  const ue = await prisma.user.findUnique({
    where: { email: body.email },
  });

  // If ue exists and is not the same user
  if (ue !== null) {
    // Update user data
    return NextResponse.json({ message: "Email đã tồn tại" }, { status: 400 });
  } else {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { name: body.name, email: body.email },
    });

    return NextResponse.json(
      { user, message: `Cập nhật dữ liệu từ id ${params.Id} thành công` },
      { status: 200 }
    );
  }
  // } catch (error) {
  //   console.error("Error:", error);
  //   return NextResponse.json(
  //     { error: "Internal server error" },
  //     { status: 500 }
  //   );
  // }
}

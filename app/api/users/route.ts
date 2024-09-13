import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json(
    { user, message: "Hiện thị tất cả các Id" },
    { status: 200 }
  );
}
export async function DELETE(request: NextRequest) {
  const user = await prisma.user.deleteMany();
  return NextResponse.json({ message: "Xoá tất cả các Id" }, { status: 200 });
}
export async function POST(request: NextRequest) {
  //a . Lấy dữ liệu do người dùng gửi lên
  const body = await request.json();
  //   console.log(body);
  //   console.log("email: ", body.email);
  //   console.log("name: ", body.name);

  //b . Kiểm tra dữ liệu có hợp lệ không (zod đảm nhận: )
  //Định nghĩa để Zod biết được đối tượng bao gồm những trường nào,
  // Các ràng buộc (constraint) tương ứng với mỗi trường(field)
  const UserSchema = z.object({
    email: z.string().email({ message: "Email khong hop le" }),
    name: z
      .string()
      .min(8, { message: "Tên cần dài hơn hoặc bằng 8 kí tự" })
      .max(255, { message: "Tên có độ dài tối đa là 255 kí tự" }),
  });
  //Thực hiện việc check
  const userValidateCheck = UserSchema.safeParse({
    email: body.email,
    name: body.name,
    address: body.address,
    phone: body.phone,
    image: body.image,
  });
  //b1. Nếu dữ liệu không hợp lệ thì báo lỗi(trả về lỗi)
  if (!userValidateCheck.success) {
    return NextResponse.json(userValidateCheck.error.errors, { status: 200 });
  } else {
    //b2. Nếu dữ liệu hợp lệ
    // Kiểm tra tính duy nhất của email
    //truy vấn trong db xem có email trùng với email chỉ định không
    //Nếu có thì báo lỗi
    const ue = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (ue == null) {
      // c. Tiến hành thêm mới dữ liệu vào DB sử dụng prisma client
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          address: body.address,
          phone: body.phone,
          image: body.image,
        },
      });
      //d Trả về kết quả là dữ liệu vừa được tạo cùng với status:201
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
  }
}

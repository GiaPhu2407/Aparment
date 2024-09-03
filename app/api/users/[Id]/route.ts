import Schema from "@/lib/zod-schema/route";

import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
export async function PUT(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const body = await request.json();
  const userId = parseInt(params.Id);

  const Check = Schema.safeParse({
    email: body.email,
    name: body.name,
  });

  if (!Check.success) {
    return NextResponse.json({ error: Check.error }, { status: 200 });
  }
  const ue = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (ue != null) {
    return NextResponse.json({ error: "Email da ton tai" }, { status: 400 });
  } else {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { email: body.email, name: body.name },
    });
    return NextResponse.json(
      { message: `Cap nhat Id ${params.Id} thanh cong` },
      { status: 200 }
    );
  }
}

import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email({ message: "Email khong hop le" }),
  name: z
    .string()
    .min(8, { message: "Ten ky tu phai dai hon 8 ky tu" })
    .max(255, { message: "Ten khong duoc dai qua 255 ky tu" }),
});

export default UserSchema;

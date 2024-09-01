import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email({ message: "Email khong hop le" }),
  name: z
    .string()
    .min(8, { message: "Tên cần dài hơn hoặc bằng 8 kí tự" })
    .max(255, { message: "Tên có độ dài tối đa là 255 kí tự" }),
});

export default UserSchema;

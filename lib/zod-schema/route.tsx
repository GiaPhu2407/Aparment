// import { z } from "zod";
import { z } from "zod";
const Userchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  name: z
    .string()
    .min(8, { message: "Ten phải dài hơn 8 ký tự" })
    .max(255, { message: "Tên không được dài hơn 255 ký tự" }),
});

import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string(),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Invalid phone"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must include uppercase")
    .regex(/[a-z]/, "Must include lowercase")
    .regex(/[0-9]/, "Must include number")
    .regex(/[\W]/, "Must include special char"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;


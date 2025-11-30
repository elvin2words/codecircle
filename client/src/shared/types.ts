// shared/types.ts
import { z } from "zod";

export const insertContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

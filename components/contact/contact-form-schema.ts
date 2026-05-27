import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(10, "Valid phone number required"),

  message: z
    .string()
    .min(10, "Message should be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
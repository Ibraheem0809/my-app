"use client";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),

  phone: z.string().min(10, "Valid phone number required"),

  email: z.string().email("Invalid email address"),

  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);

    toast.success("Your message has been sent successfully!");

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="h-14 w-full rounded-2xl border border-border bg-white px-5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
          className="h-14 w-full rounded-2xl border border-border bg-white px-5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phone")}
          className="h-14 w-full rounded-2xl border border-border bg-white px-5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          rows={6}
          placeholder="Write your message..."
          {...register("message")}
          className="w-full rounded-2xl border border-border bg-white p-5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

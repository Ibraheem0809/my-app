"use client";

import { useContactForm } from "./useContactForm";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* NAME */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none transition focus:border-primary"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none transition focus:border-primary"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phone")}
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 outline-none transition focus:border-primary"
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <textarea
          rows={6}
          placeholder="Write your message..."
          {...register("message")}
          className="w-full rounded-2xl border border-slate-200 bg-white p-5 outline-none transition focus:border-primary"
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[var(--primary)] px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

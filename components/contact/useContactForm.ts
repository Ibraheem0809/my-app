"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  contactFormSchema,
  type ContactFormValues,
} from "./contact-form-schema";

export function useContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: ContactFormValues) => {
    try {
      /**
       * =========================================================
       * EMAILJS / API LOGIC
       * =========================================================
       *
       * Add EmailJS here ONCE.
       *
       * Example:
       *
       * await emailjs.send(...)
       *
       * OR:
       *
       * await fetch("/api/contact", {...})
       *
       * =========================================================
       */

      console.log(values);

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    }
  };

  return {
    ...form,
    onSubmit,
    isSubmitting,
  };
}
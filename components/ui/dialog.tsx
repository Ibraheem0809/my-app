"use client";

import * as React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

export function Dialog(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root {...props} />;
}

export function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal {...props} />;
}

export function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close {...props} />;
}

export function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/20 bg-white p-8 shadow-2xl outline-none",
          className
        )}
        {...props}
      >
        {children}

        <DialogPrimitive.Close className="absolute right-5 top-5 rounded-full p-2 transition hover:bg-slate-100">
          <X size={20} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "text-xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-2 text-left", className)}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

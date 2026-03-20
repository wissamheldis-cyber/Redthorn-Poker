"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Bordeaux — CTA principal */
        default:
          "bg-[#7B1E2A] text-[#F5EDD8] border-[rgba(196,132,58,0.20)] shadow-[0_2px_12px_rgba(123,30,42,0.40),inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-[#8B2535] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(123,30,42,0.55)]",
        /* Contour ambre */
        outline:
          "border border-[rgba(196,132,58,0.30)] bg-transparent text-[#C8B89A] hover:bg-[rgba(196,132,58,0.08)] hover:text-[#F0E6D0] hover:border-[rgba(196,132,58,0.50)]",
        /* Surface bois */
        secondary:
          "bg-[rgba(42,22,12,0.70)] text-[#C8B89A] border-[rgba(196,132,58,0.12)] hover:bg-[rgba(56,28,14,0.80)] hover:text-[#F0E6D0]",
        /* Fantôme */
        ghost:
          "bg-transparent text-[#8A7060] hover:bg-[rgba(196,132,58,0.07)] hover:text-[#C8B89A]",
        /* Destructif */
        destructive:
          "bg-[rgba(155,37,53,0.15)] text-[#F0AABB] border-[rgba(155,37,53,0.35)] hover:bg-[rgba(155,37,53,0.25)]",
        link: "text-[#C4843A] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-5 py-2 tracking-wide",
        xs: "h-6 px-2.5 text-xs",
        sm: "h-8 px-4 text-sm",
        lg: "h-11 px-8 text-base tracking-wider",
        icon: "size-9",
        "icon-xs": "size-6",
        "icon-sm": "size-7",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

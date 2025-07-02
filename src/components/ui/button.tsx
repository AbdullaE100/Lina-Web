import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-luxury",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md magnetic",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md magnetic",
        outline: "border border-border bg-background hover:bg-stone hover:text-stone-foreground shadow-sm hover:shadow-md magnetic",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md magnetic",
        ghost: "hover:bg-stone hover:text-stone-foreground magnetic",
        link: "text-primary underline-offset-4 hover:underline magnetic",
        primary: "bg-gradient-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-luxury backdrop-blur-sm",
        gold: "bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:shadow-xl transform hover:scale-[1.02] transition-luxury",
        luxury: "bg-background text-primary border border-border/50 font-medium shadow-lg hover:shadow-xl hover:bg-stone transform hover:scale-[1.02] transition-luxury backdrop-blur-sm",
        minimal: "text-muted-foreground hover:text-primary transition-luxury underline-offset-4 hover:underline",
        cta: "bg-gradient-gold text-primary font-semibold shadow-gold hover:shadow-2xl transform hover:scale-[1.05] transition-luxury relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        hero: "bg-primary text-primary-foreground border border-primary/10 font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transform hover:scale-[1.02] transition-luxury backdrop-blur-sm",
        elegant: "bg-background text-primary border border-border hover:bg-stone hover:text-stone-foreground shadow-md hover:shadow-lg font-medium magnetic",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-12 rounded-lg px-8 text-base font-medium",
        xl: "h-16 rounded-xl px-12 text-lg font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

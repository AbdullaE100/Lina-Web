import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-fluid focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-medium magnetic",
        
        primary: "bg-gradient-primary text-primary-foreground font-medium shadow-elevated hover:shadow-floating magnetic backdrop-blur-sm border border-primary/10",
        
        gold: "bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:shadow-floating magnetic before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000",
        
        outline: "border border-border bg-background/80 backdrop-blur-sm hover:bg-neutral hover:border-border/80 shadow-subtle hover:shadow-soft magnetic",
        
        ghost: "hover:bg-neutral/50 hover:backdrop-blur-sm magnetic text-muted-foreground hover:text-foreground",
        
        glass: "bg-gradient-glass backdrop-blur-xl border border-border/30 hover:border-border/50 shadow-medium hover:shadow-elevated magnetic",
        
        executive: "bg-primary text-primary-foreground border border-primary/20 font-medium shadow-elevated hover:shadow-floating magnetic backdrop-blur-sm hover:bg-primary/95",
        
        minimal: "text-muted-foreground hover:text-gold magnetic underline-offset-8 hover:underline decoration-gold/60 decoration-2",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg",
        default: "h-11 px-6 text-sm rounded-xl",
        lg: "h-12 px-8 text-base rounded-xl font-medium",
        xl: "h-14 px-10 text-lg rounded-2xl font-medium",
        icon: "h-11 w-11 rounded-xl",
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

"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (
    <div
      className={cn(
        // Mobile: fixed bottom navbar, Desktop: fixed top navbar
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-30",
        // Mobile: full width with less padding, Desktop: compact centered
        "w-full max-w-sm sm:max-w-none sm:w-auto",
        // Mobile: bottom margin, Desktop: top padding
        "mb-4 sm:mb-0 sm:pt-6",
        "px-3 sm:px-0",
        "pointer-events-none",
        className,
      )}
    >
      <div className={cn(
        "flex items-center justify-center gap-1 sm:gap-3",
        "bg-background/80 sm:bg-background/5 border border-border backdrop-blur-lg",
        // Mobile: balanced padding, Desktop: compact
        "py-3 sm:py-1 px-2 sm:px-1",
        "rounded-2xl sm:rounded-full shadow-lg pointer-events-auto",
        // Mobile: allow horizontal scroll if needed
        "overflow-x-auto scrollbar-hide"
      )}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold",
                // Mobile: icon-only with balanced touch targets, Desktop: compact
                "px-2 py-2 sm:px-6 sm:py-2",
                "rounded-xl sm:rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                "flex items-center justify-center",
                // Mobile: square touch targets, Desktop: flex-none
                "w-10 h-10 sm:w-auto sm:h-auto sm:flex-none flex-shrink-0",
                isActive && "bg-muted text-primary",
              )}
            >
              {/* Mobile: Icon only, Desktop: Text only for larger screens, Icon only for md */}
              <Icon size={18} strokeWidth={2.5} className="sm:hidden md:inline lg:hidden" />
              <span className="hidden sm:inline md:hidden lg:inline">{item.name}</span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-xl sm:rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full hidden sm:block">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
} 
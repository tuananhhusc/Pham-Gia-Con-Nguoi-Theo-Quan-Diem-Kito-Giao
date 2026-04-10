"use client"

import * as React from "react"
import { Moon, Sun, BookOpen } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  // Cycle through themes: light -> sepia -> dark -> light
  const toggleTheme = () => {
    if (theme === "light") setTheme("sepia")
    else if (theme === "sepia") setTheme("dark")
    else setTheme("light")
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full w-9 h-9 text-muted-foreground transition-colors hover:bg-parchment/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      aria-label="Chuyển chế độ đọc"
      title="Chuyển chế độ đọc (Sáng / Sepia / Tối)"
    >
      {currentTheme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
      {currentTheme === "sepia" && <BookOpen className="h-[1.2rem] w-[1.2rem] text-accent" />}
      {currentTheme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </button>
  )
}

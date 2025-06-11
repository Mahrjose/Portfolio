"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Education", href: "/education" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHoveringTop, setIsHoveringTop] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar when hovering near the top of the screen (within 50px)
      if (e.clientY <= 50) {
        setIsHoveringTop(true)
        setIsVisible(true)
      } else {
        setIsHoveringTop(false)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [lastScrollY])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 transition-all duration-300",
        isVisible || isHoveringTop ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick("/")}
            className="font-bold text-lg sm:text-xl text-foreground hover:text-primary transition-colors hover-text-glow"
          >
            Mirza Mahrab Hossain
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-xs font-medium transition-colors hover:text-primary hover-text-glow",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover-lift">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t bg-background/95 backdrop-blur-md animate-fade-in-up">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block w-full text-left py-3 px-2 text-xs font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-md",
                    pathname === item.href ? "text-primary bg-muted/50" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

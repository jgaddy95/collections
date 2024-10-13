"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Collections
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className={cn("hover:text-primary", pathname === "/" && "text-primary font-semibold")}>
            Home
          </Link>
          <Link href="/collections" className={cn("hover:text-primary", pathname === "/collections" && "text-primary font-semibold")}>
            Collections
          </Link>
          <Link href="/marketplace" className={cn("hover:text-primary", pathname === "/marketplace" && "text-primary font-semibold")}>
            Marketplace
          </Link>
          <Link href="/community" className={cn("hover:text-primary", pathname === "/community" && "text-primary font-semibold")}>
            Community
          </Link>
          <ModeToggle />
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
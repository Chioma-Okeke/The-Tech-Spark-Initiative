"use client"

import { navItems } from "@/lib/data"
import { Button } from "../ui/button"
import { LogoSVG } from "./logo-svg"
import MaxContainer from "./max-container"
import PaddingContainer from "./padding-container"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NavBar = () => {

    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <section className="bg-[#F8FAFC]">
            <PaddingContainer className="py-4">
                <MaxContainer>
                    <div className="flex items-center justify-between gap-4">
                        <div className="shrink-0">
                            <LogoSVG />
                        </div>

                        {/* Desktop nav */}
                        <nav className="hidden lg:block">
                            <ol className="flex items-center gap-8">
                                {navItems.map((item) => (
                                    <li key={item.link}>
                                        <Link
                                            href={item.link}
                                            className={cn(
                                                "text-ink-muted border-b border-transparent pb-4 transition-colors hover:text-foreground",
                                                {
                                                    "border-black font-bold text-foreground":
                                                        pathname === item.link,
                                                }
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        {/* Desktop CTA */}
                        <Button className="hidden shrink-0 rounded-full px-6 py-3 h-auto lg:inline-flex">
                            BECOME A SPARK TODAY!
                        </Button>

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            onClick={() => setOpen((prev) => !prev)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-black/5 lg:hidden"
                        >
                            {open ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>

                    {/* Mobile nav panel */}
                    <nav
                        id="mobile-nav"
                        hidden={!open}
                        className="mt-4 border-t border-ink-muted/20 pt-4 lg:hidden"
                    >
                        <ol className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <li key={item.link}>
                                    <Link
                                        href={item.link}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "block rounded-md px-3 py-2 text-ink-muted transition-colors hover:bg-black/5 hover:text-foreground",
                                            {
                                                "bg-black/5 font-bold text-foreground":
                                                    pathname === item.link,
                                            }
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                        <Button className="mt-4 w-full rounded-full px-6 py-3 h-auto">
                            BECOME A SPARK TODAY!
                        </Button>
                    </nav>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default NavBar

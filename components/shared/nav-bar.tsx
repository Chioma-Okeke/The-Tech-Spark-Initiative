"use client"

import { navItems, registrationLink } from "@/lib/data"
import { buttonVariants } from "../ui/button"
import { LogoSVG } from "./logo-svg"
import MaxContainer from "./max-container"
import PaddingContainer from "./padding-container"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, type Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

// drops down and fades in, links follow one after another; closes quicker than it opens
const panel: Variants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease, staggerChildren: 0.04, delayChildren: 0.05 },
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
}

const panelItem: Variants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
}

const NavBar = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <section className="bg-[#F8FAFC] ">
            <PaddingContainer className="py-4 max-lg:px-0">
                <MaxContainer className="relative max-sm:px-2">
                    <div className="flex items-center justify-between gap-4">
                        <Link href="/" className="shrink-0">
                            <LogoSVG />
                        </Link>

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
                        <Link 
                            href={registrationLink}
                            target="_blank"
                            className={
                            cn(buttonVariants(), "hidden shrink-0 rounded-full px-6 py-3 h-auto lg:inline-flex")
                        }>
                            BECOME A SPARK TODAY!
                        </Link>

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            onClick={() => setOpen((prev) => !prev)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-black/5 lg:hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={open ? "close" : "open"}
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.18 }}
                                    className="inline-flex"
                                >
                                    {open ? <X className="size-6" /> : <Menu className="size-6" />}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>

                    <AnimatePresence>
                        {open && (
                            <motion.nav
                                id="mobile-nav"
                                variants={panel}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-4 border-t border-ink-muted/20 p-4 lg:hidden absolute inset-x-0 bg-[#F8FAFC] z-50 origin-top shadow-lg shadow-black/5"
                            >
                                <ol className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <motion.li key={item.link} variants={panelItem}>
                                            <Link
                                                href={item.link}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "block rounded-md p-3 text-ink-muted transition-colors hover:bg-black/5 hover:text-foreground",
                                                    {
                                                        "bg-black/5 font-bold text-foreground":
                                                            pathname === item.link,
                                                    }
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ol>
                                <motion.div variants={panelItem}>
                                    <Link
                                        href={registrationLink}
                                        target="_blank"
                                        className={
                                        cn(buttonVariants(), "mt-4 w-full rounded-full px-6 py-4 h-auto")
                                    }>
                                        BECOME A SPARK TODAY!
                                    </Link>
                                </motion.div>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default NavBar

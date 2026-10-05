"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "@/icons"
import { drawLine, ease, fadeUp, floatIn, heroCopy } from "@/lib/animation-data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { Button } from "../ui/button"
import Image from "next/image"

const InnovationHeroSection = () => {
    const moveToProjectSection = () => {
        const el = document.getElementById("projects")
        if (!el) return
        const top = el.getBoundingClientRect().top
        window.scrollTo({
            top,
            behavior: "smooth"
        })
    }

    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <motion.svg
                aria-hidden
                preserveAspectRatio="none"
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute bottom-0 hidden h-full w-full text-aqua-400/80 lg:block"
            >
                <motion.line
                    x1="88%"
                    y1="90%"
                    x2="180%"
                    y2="0%"
                    stroke="currentColor"
                    strokeWidth="2"
                    custom={0}
                    variants={drawLine}
                />
            </motion.svg>
            {/* mobile/tablet: from the top-right corner, down to the left at exactly 45°.*/}
            <motion.svg
                aria-hidden
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute right-0 top-0 aspect-square w-[31.5%] overflow-visible text-aqua-400/80 lg:hidden"
            >
                <motion.line
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    custom={0}
                    variants={drawLine}
                />
            </motion.svg>

            {/* corner blobs */}
            <div className="pointer-events-none absolute bottom-4 md:bottom-10 left-4 md:left-10">
                <motion.div
                    {...floatIn(12, 6, 0.6)}
                    className="size-25 rounded-[50px] bg-iris-500/20"
                />
                <motion.div
                    {...floatIn(10, 7.5, 0.8)}
                    className="absolute left-16 top-8 size-20 rounded-[50px] bg-gold-500/30"
                />
            </div>

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28 lg:pb-30">
                <MaxContainer className="max-w-277">
                    <div className="grid items-center gap-12 lg:grid-cols-3 lg:gap-10">
                        <motion.div
                            variants={heroCopy}
                            initial="hidden"
                            animate="visible"
                            className="relative z-10 max-w-168.75 text-center lg:text-left lg:col-span-2 h-full"
                        >
                            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
                                <motion.span variants={fadeUp} className="inline-block text-primary">
                                    IDEAS INTO&nbsp;
                                </motion.span>
                                <motion.span variants={fadeUp} className="inline-block text-iris-400">
                                    IMPACT.
                                </motion.span>
                            </h1>
                            <motion.p
                                variants={fadeUp}
                                className="mx-auto mt-6 max-w-md max-sm:text-sm leading-relaxed text-muted-foreground lg:text-lg lg:mx-0"
                            >
                                Explore our innovation case files. Witness the collision of visionary
                                concepts and high-end digital execution, powered by AI and modern tech
                                stacks. Learn how to apply it.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Button
                                    onClick={moveToProjectSection}
                                    className="group mt-8 h-auto gap-2 rounded-xl px-7 py-4 max-lg:text-sm font-bold"
                                >
                                    Explore Projects
                                    <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                </Button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease, delay: 0.25 }}
                            className="relative z-10 overflow-hidden w-full max-w-95.5 h-full lg:col-span-1"
                        >
                            <motion.div
                                initial={{ scale: 1.08 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.6, ease, delay: 0.25 }}
                                className="absolute inset-0"
                            >
                                <Image src="/innovation-hero-image.png" fill className="object-top object-cover" alt="Illustration" />
                            </motion.div>
                        </motion.div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default InnovationHeroSection

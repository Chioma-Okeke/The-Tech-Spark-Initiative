"use client"

import Link from "next/link"
import { cn } from "cn"
import { motion } from "framer-motion"
import { ArrowRight } from "@/icons"
import { drawLine, ease, fadeUp, floatIn, heroCopy } from "@/lib/animation-data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"
import Image from "next/image"

const InnovationHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <motion.svg
                aria-hidden
                preserveAspectRatio="none"
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute bottom-0 hidden h-full w-full text-aqua-400/40 lg:block"
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

            {/* corner blobs */}
            <div className="pointer-events-none absolute bottom-10 left-10 hidden sm:block">
                <motion.div
                    {...floatIn(12, 6, 0.6)}
                    className="size-full max-w-25 max-h-25 rounded-[50px] bg-iris-500/20"
                />
                <motion.div
                    {...floatIn(10, 7.5, 0.8)}
                    className="absolute left-16 top-8 size-full max-w-20 max-h-20 rounded-[50px] bg-gold-500/30"
                />
            </div>

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="max-w-277">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
                        {/* Copy */}
                        <motion.div
                            variants={heroCopy}
                            initial="hidden"
                            animate="visible"
                            className="relative z-10 max-w-168.75 text-center lg:text-left"
                        >
                            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                                <motion.span variants={fadeUp} className="inline-block text-primary">
                                    IDEAS INTO&nbsp;
                                </motion.span>
                                <motion.span variants={fadeUp} className="inline-block text-iris-400">
                                    IMPACT.
                                </motion.span>
                            </h1>
                            <motion.p
                                variants={fadeUp}
                                className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
                            >
                                Explore our innovation case files. Witness the collision of visionary
                                concepts and high-end digital execution, powered by AI and modern tech
                                stacks. Learn how to apply it.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link
                                    href="#featured-courses"
                                    className={cn(
                                        buttonVariants(),
                                        "group mt-8 h-auto gap-2 rounded-xl px-7 py-4 text-sm font-bold"
                                    )}
                                >
                                    Explore Projects
                                    <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* image fades in while settling from a slight zoom */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease, delay: 0.25 }}
                            className="relative z-10 overflow-hidden w-full max-w-95.5 h-full max-h-69.25"
                        >
                            <motion.div
                                initial={{ scale: 1.08 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.6, ease, delay: 0.25 }}
                                className="absolute inset-0"
                            >
                                <Image src="/innovation-hero-image.png" fill className="object-center object-cover" alt="Illustration" />
                            </motion.div>
                        </motion.div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default InnovationHeroSection

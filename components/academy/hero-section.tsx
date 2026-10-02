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

const lines = [
    { x1: "78%", y1: "-8%", x2: "112%", y2: "44%" },
    { x1: "88%", y1: "60%", x2: "116%", y2: "108%" },
]

const AcademyHeroSection = () => {
    return (
            <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
                {/* decorative diagonal lines */}
                <motion.svg
                    aria-hidden
                    preserveAspectRatio="none"
                    initial="hidden"
                    animate="visible"
                    className="pointer-events-none absolute inset-0 h-full w-full text-aqua-400/80 lg:block"
                >
                    {lines.map((line, i) => (
                        <motion.line
                            key={i}
                            {...line}
                            stroke="currentColor"
                            strokeWidth="1"
                            custom={i}
                            variants={drawLine}
                        />
                    ))}
                </motion.svg>

                {/* corner blobs */}
                <div className="pointer-events-none absolute bottom-10 left-5 lg:left-10  sm:block">
                    <motion.div
                        {...floatIn(12, 6, 0.6)}
                        className="size-22 lg:size-32 rounded-[50px] bg-iris-500/15"
                    />
                    <motion.div
                        {...floatIn(10, 7.5, 0.8)}
                        className="absolute left-12 top-8 size-22 lg:size-28 rounded-[50px] bg-gold-500/15"
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
                                <h1 className="text-[42px] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                                    <motion.span variants={fadeUp} className="inline-block text-primary">
                                        Enter the&nbsp;
                                    </motion.span>
                                    <motion.span variants={fadeUp} className="inline-block text-iris-400">
                                        Academy.
                                    </motion.span>
                                </h1>
                                <motion.p
                                    variants={fadeUp}
                                    className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground lg:mx-0"
                                >
                                    Your journey from learner to technology builder starts here. Immerse
                                    yourself in a futuristic learning ecosystem designed to forge the next
                                    generation of visionary architects.
                                </motion.p>
                                <motion.div variants={fadeUp}>
                                    <Link
                                        href="#featured-courses"
                                        className={cn(
                                            buttonVariants(),
                                            "group mt-8 h-auto gap-2 rounded-xl px-7 py-4 font-bold"
                                        )}
                                    >
                                        Explore Courses
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
                                    <Image src="/academy-hero-image.png" fill className="object-center object-cover" alt="Illustration" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </MaxContainer>
                </PaddingContainer>
            </section>
    )
}

export default AcademyHeroSection

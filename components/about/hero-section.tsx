"use client"

import Link from "next/link"
import { cn } from "cn"
import { MotionConfig, motion, type Variants } from "framer-motion"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"

const ease = [0.22, 1, 0.36, 1] as const

const heroCopy: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
}

// brand shapes pop in once on load, then drift with a slight tilt forever.
// opacity/scale run once; y/rotate loop and only start after the entrance ends.
const entranceDuration = 0.8

const float = (distance: number, duration: number, delay = 0) => {
    const loop = {
        duration,
        delay: delay + entranceDuration,
        ease: "easeInOut" as const,
        repeat: Infinity,
    }

    return {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 1, scale: 1, y: [0, -distance, 0], rotate: [0, distance / 4, 0] },
        transition: {
            opacity: { duration: entranceDuration, delay, ease },
            scale: { duration: entranceDuration, delay, ease },
            y: loop,
            rotate: loop,
        },
    }
}

const AboutHeroSection = () => {
    return (
        <MotionConfig reducedMotion="user">
            <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
                {/* decorative brand shapes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6, ease }}
                    className="pointer-events-none absolute inset-0"
                >
                    <div className="absolute -left-20 top-1/2 hidden size-64 -translate-y-1/2 rounded-[72px] bg-iris-500/15 blur-2xl md:block" />
                    <div className="absolute -right-24 top-10 hidden size-72 rounded-[72px] bg-iris-400/10 blur-2xl md:block" />
                </motion.div>
                <svg
                    aria-hidden
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/90 md:block"
                >
                    <motion.line
                        x1="0%"
                        y1="95%"
                        x2="14%"
                        y2="35%"
                        stroke="currentColor"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: { duration: 1.4, ease, delay: 0.4 },
                            opacity: { duration: 0.3, delay: 0.4 },
                        }}
                    />
                </svg>
                <PaddingContainer className="relative py-20 md:py-28 lg:py-32">
                    <motion.div variants={heroCopy} initial="hidden" animate="visible">
                        <MaxContainer className="flex flex-col items-center text-center">
                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl"
                            >
                                About <span className="text-primary">TVI</span>
                            </motion.h1>
                            <motion.p
                                variants={fadeUp}
                                className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                            >
                                The Tech-Spark Visionary Initiative is a premium, faith-rooted technology
                                initiative bridging the gap between purpose, education, and innovation —
                                building the next generation of tech leaders.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link
                                    href="/get-involved"
                                    className={cn(
                                        buttonVariants(),
                                        "mt-8 h-auto rounded-full px-8 py-4 text-xs font-bold tracking-[0.15em]"
                                    )}
                                >
                                    SUPPORT US
                                </Link>
                            </motion.div>
                        </MaxContainer>
                    </motion.div>
                </PaddingContainer>
                <motion.div
                    {...float(14, 2)}
                    className="pointer-events-none absolute right-4 lg:right-8 bottom-4 lg:bottom-10 size-18 lg:size-28 -translate-y-1/2 rounded-[44px] bg-[#D481F2]/20 md:block"
                />
                <motion.div
                    {...float(14, 6, 0.1)}
                    className="pointer-events-none absolute right-12 lg:right-20 bottom-6 lg:bottom-15 size-18 lg:size-25 rounded-[44px] bg-gold-400/30 md:block"
                />
            </section>
        </MotionConfig>
    )
}

export default AboutHeroSection

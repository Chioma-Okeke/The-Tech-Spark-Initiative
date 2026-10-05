"use client"

import { cn } from "cn"
import { motion } from "framer-motion"
import { journeySteps } from "@/lib/data"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { Button, buttonVariants } from "../ui/button"
import ImageIllustration from "./image-illustration"
import { drawLine, fadeUp, heroCopy, ease } from "@/lib/animation-data"
import { heroSectionLines } from "@/lib/styling-data"
import Link from "next/link"




const HeroSection = () => {
    return (
        <section className="dark overflow-hidden bg-[#F8FAFC] max-lg:bg-ink-900 text-foreground">
            <div className="relative">
                {/* decorative diagonal lines */}
                <motion.svg
                    aria-hidden
                    viewBox="0 0 1340 768"
                    initial="hidden"
                    animate="visible"
                    className="pointer-events-none absolute left-0 top-0 z-50 hidden h-auto w-full overflow-visible text-aqua-400/90 lg:block"
                >
                    <g stroke="currentColor" strokeWidth="1.5">
                        {heroSectionLines.map((line, i) => (
                            <motion.line key={i} {...line} custom={i} variants={drawLine} />
                        ))}
                    </g>
                </motion.svg>

                <PaddingContainer className="relative bg-ink-900 w-[80%] max-lg:mx-auto rounded-tr-[19px]">
                    <MaxContainer className=" max-w-220.5">
                        <div className="max-lg:flex justify-center items-center gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:pt-34.5 lg:pb-4.75">
                            {/* Copy */}
                            <motion.div
                                variants={heroCopy}
                                initial="hidden"
                                animate="visible"
                                className="relative z-10 max-2xl:max-w-xl text-center lg:text-left"
                            >
                                <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl 2xl:text-8xl">
                                    <motion.span variants={fadeUp} className="block text-iris-400">
                                        Elevate your
                                    </motion.span>
                                    <motion.span variants={fadeUp} className="block text-primary">
                                        tech future.
                                    </motion.span>
                                </h1>
                                <motion.p
                                    variants={fadeUp}
                                    className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base 2xl:text-lg lg:mx-0"
                                >
                                    Technology with Purpose. Innovation with Impact.
                                </motion.p>
                                <motion.div
                                    variants={fadeUp}
                                    className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/academy"
                                        className={cn(
                                            buttonVariants(),
                                            "h-auto w-full rounded-full px-8 py-4 max-sm:text-xs font-bold tracking-[0.15em] sm:w-auto"
                                        )}>
                                        EXPLORE PROGRAMMES
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={
                                            cn(buttonVariants({ variant: "outline" }), "h-auto w-full rounded-full border-iris-500 bg-transparent px-8 py-4 max-sm:text-xs font-bold tracking-[0.15em] text-foreground hover:bg-iris-500/10 sm:w-auto")
                                        }
                                    >
                                        OUR VISION
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </MaxContainer>
                </PaddingContainer>
                <motion.div
                    initial={{ opacity: 0, y: 32, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease, delay: 0.25 }}
                    className="relative z-10 mt-4 lg:absolute lg:top-0 lg:right-[3%] lg:mt-0 max-md:px-3"
                >
                    <ImageIllustration />
                </motion.div>
            </div>

            <PaddingContainer className="pb-16 md:pb-24 pt-20 lg:pt-58 bg-ink-900">
                <MaxContainer className="space-y-10 md:space-y-12 relative">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        className="text-center text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                        A Journey of Transformation
                    </motion.h2>
                    <div className="relative mx-auto grid max-w-297.5 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {journeySteps.map((step, i) => (
                            <AnimatedSection key={step.name} delay={i * 0.12} className="z-10">
                                <motion.article
                                    whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
                                    className="flex h-full flex-col items-center rounded-2xl border border-iris-800/30 bg-ink-850/60 p-6 text-center backdrop-blur-xl"
                                >
                                    <span
                                        className={cn(
                                            "grid size-14 place-items-center rounded-full border",
                                            step.accent
                                                ? "border-primary text-primary"
                                                : "border-iris-500 text-iris-400"
                                        )}
                                    >
                                        <step.icon className="size-6" />
                                    </span>
                                    <h3
                                        className={cn(
                                            "mt-5 text-xl font-bold",
                                            step.accent ? "text-primary" : "text-foreground"
                                        )}
                                    >
                                        {step.name}
                                    </h3>
                                    <p className="mt-3 max-lg:text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </motion.article>
                            </AnimatedSection>
                        ))}
                        <motion.hr
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease, delay: 0.3 }}
                            className="absolute left-1/2 top-1/2 h-full w-0 -translate-x-1/2 -translate-y-1/2 border border-[#8333C6] sm:hidden lg:block lg:h-0 lg:w-full"
                        />
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default HeroSection

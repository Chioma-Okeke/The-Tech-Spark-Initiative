"use client"

import { cn } from "cn"
import { methodologySteps } from "@/lib/data"
import { ease } from "@/lib/animation-data"
import type { MethodologyStep } from "@/types"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import { motion } from "framer-motion"
import PaddingContainer from "../shared/padding-container"

const iconStyles: Record<MethodologyStep["tone"], string> = {
    neutral: "bg-ink-600 text-white shadow-[0_0_30px_-6px_var(--color-iris-400)]",
    iris: "bg-iris-500 text-white shadow-[0_0_30px_-4px_var(--color-iris-500)]",
    gold: "bg-gold-500 text-ink-950 shadow-[0_0_30px_-4px_var(--color-gold-500)]",
    "gold-outline":
        "border border-gold-500 text-gold-400 shadow-[0_0_30px_-6px_var(--color-gold-500)]",
}

// the line draws first; each step lands along it one after another
const lineDuration = 1.2
const stepStagger = 0.15

const MethodologySection = () => {
    return (
        <section className="dark bg-ink-900 text-foreground">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12 md:space-y-16">
                    <AnimatedSection>
                        <h2 className="text-center text-3xl font-bold sm:text-4xl">
                            The TVI Methodology
                        </h2>
                    </AnimatedSection>

                    {/* the wrapper watches for the viewport: the line itself starts fully
                            clipped, and a fully clipped element never counts as "in view" */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        {/* connector line — shows through the gaps between cards.
                                vertical on mobile (single column), horizontal from sm up.
                                clip-path uncovers it from its start, so the same animation
                                draws downward on mobile and rightward on desktop */}
                        <motion.div
                            variants={{
                                hidden: { clipPath: "inset(0% 100% 100% 0%)" },
                                visible: {
                                    clipPath: "inset(0% 0% 0% 0%)",
                                    transition: { duration: lineDuration, ease },
                                },
                            }}
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden lg:block h-full w-px bg-linear-to-b sm:h-px sm:w-full sm:bg-linear-to-r from-iris-500/80 via-iris-500/50 to-gold-500/80"
                        />
                        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                            {methodologySteps.map((step, i) => (
                                <li key={step.name}>
                                    <AnimatedSection
                                        delay={0.2 + i * stepStagger}
                                        className="group flex h-full flex-col items-center rounded-2xl border border-white/5 bg-ink-850 p-6 text-center transition-colors duration-500 hover:border-white/15 sm:p-8"
                                    >
                                        <span
                                            className={cn(
                                                "grid size-16 place-items-center rounded-full transition-[scale] duration-500 ease-out group-hover:scale-110",
                                                iconStyles[step.tone]
                                            )}
                                        >
                                            <step.icon className="size-6" />
                                        </span>
                                        <h3 className="mt-5 text-lg font-bold uppercase tracking-wider">
                                            {step.name}
                                        </h3>
                                        <p className="mt-2 font-mono text-[0.8rem] uppercase tracking-widest text-muted-foreground">
                                            {step.caption}
                                        </p>
                                    </AnimatedSection>
                                </li>
                            ))}
                        </ol>
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MethodologySection

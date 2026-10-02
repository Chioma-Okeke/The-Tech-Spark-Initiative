"use client"

import Image from "next/image"
import { cn } from "cn"
import { motion, type Variants } from "framer-motion"
import { CircleCheckBig } from "lucide-react"
import { compoundingSteps, outreachPillars } from "@/lib/data"
import type { OutreachPillar } from "@/types"
import { ArrowRight } from "@/icons"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const ease = [0.22, 1, 0.36, 1] as const

// the compounding steps build up one after another: 1 → 10 → 100 → ∞
const stepsRow: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}

const stepItem: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

const OutreachSection = () => {
    return (
        <section className="dark bg-linear-to-b from-ink-950 to-ink-900 text-foreground">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12 md:space-y-16">
                    <div className=" space-y-2">
                        <AnimatedSection className="overflow-hidden rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:bg-linear-to-t after:from-ink-950/60 after:to-transparent">
                            {/* slow settle-in zoom as the banner is revealed */}
                            <motion.div
                                initial={{ scale: 1.08 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease }}
                            >
                                <Image
                                    src="/innovation-section.png"
                                    alt="A volunteer helping a mother and child with a laptop at a community learning session"
                                    width={1600}
                                    height={640}
                                    sizes="(min-width: 1280px) 1280px, 100vw"
                                    className="h-64 w-full object-cover sm:h-80 md:h-107.5"
                                />
                            </motion.div>
                            <div className="w-full h-12 absolute bottom-0 left-0 bg-linear-to-t from-ink-950 to-transparent"></div>
                        </AnimatedSection>

                        <AnimatedSection
                            delay={0.1}
                            className="mx-auto max-w-2xl text-center spacey-6 lg:space-y-10"
                        >
                            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-[55px]">
                                Helping People &amp; Multiplying Impact
                            </h2>
                            <div className="space-y-2">
                                <p className="font-mono max-sm:text-sm lg:text-3xl font-medium uppercase tracking-[0.3em] text-gold-400">
                                    <span className="text-iris-500">TVI </span>
                                    <span>Outreaches</span>
                                </p>
                                <p className="max-sm:text-sm leading-relaxed text-muted-foreground lg:text-lg">
                                    Technology is our tool, but human uplift is our devotion. We invest
                                    deeply in grassroots enablement and compound compassion
                                    exponentially.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {outreachPillars.map((pillar, i) => (
                            <AnimatedSection key={pillar.name} delay={i * 0.1}>
                                <PillarCard pillar={pillar} />
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#160B33,#0A0E27,#1E004B)] p-8 md:p-12">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_100%_0%,var(--color-iris-600)/30%,transparent_70%)]"
                        />
                        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-md">
                                <span className="inline-block rounded-full bg-gold-500/10 border border-gold-500/40 px-4 py-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
                                    The 10x Compounding Effect
                                </span>
                                <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                                    Multiplication, Not Addition
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-iris-100 sm:text-base">
                                    Every life touched becomes an active torchbearer. Our model
                                    isn&apos;t just about training one Spark, it is designed to
                                    ignite self-propagating waves of change across African
                                    generations.
                                </p>
                            </div>

                            <motion.div
                                variants={stepsRow}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                className="flex max-md:flex-col items-center justify-center gap-3 sm:gap-4"
                            >
                                {compoundingSteps.map((step, index) => (
                                    <motion.div
                                        key={step.label}
                                        variants={stepItem}
                                        className="flex max-md:flex-col items-center gap-3 sm:gap-4"
                                    >
                                        <div
                                            className={cn(
                                                "flex flex-col items-center gap-1.5 rounded-2xl px-5 py-5 text-center sm:px-6 w-full",
                                                !step.highlight
                                                    ? "bg-[#0A0E27]/80 text-gold-500 border border-[#6200EE]/30"
                                                    : "bg-[#6200EE]/20 text-foreground"
                                            )}
                                        >
                                            <span className="text-2xl font-extrabold sm:text-3xl">
                                                {step.value}
                                            </span>
                                            <span
                                                className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground"
                                            >
                                                {step.label}
                                            </span>
                                        </div>
                                        {index < compoundingSteps.length - 1 ? (
                                            index === compoundingSteps.length - 2 ? (
                                                <span className="text-2xl font-bold text-gold-400" aria-hidden>
                                                    &#8734;
                                                </span>
                                            ) : (
                                                <ArrowRight className="size-5 shrink-0 text-gold-400" />
                                            )
                                        ) : null}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </AnimatedSection>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default OutreachSection

const PillarCard = ({ pillar }: { pillar: OutreachPillar }) => {
    const Icon = pillar.icon

    return (
        <article
            className={cn(
                "flex h-full flex-col rounded-2xl border border-white/10 bg-[#0F1436]/60 p-6 backdrop-blur-xl sm:p-8 transition-[translate,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-iris-500/40",
                {
                    "border-gold-500/30 hover:border-gold-500/60": pillar.highlight,
                }
            )}
        >
            <span
                className={cn(
                    "grid size-11 place-items-center rounded-xl",
                    pillar.highlight ? "bg-gold-500/20 text-gold-500" : "bg-[#6200EE]/20 text-iris-300"
                )}
            >
                <Icon className="size-5 text-gold-500" />
            </span>
            <h3
                className={cn(
                    "mt-6 text-xl lg:text-2xl font-bold",
                    pillar.highlight ? "text-gold-500" : "text-foreground"
                )}
            >
                {pillar.name}
            </h3>
            <p className="mt-3 flex-1 max-lg:text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
            </p>
            <hr className="mt-6 border-white/10" />
            <span className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CircleCheckBig className="size-4 shrink-0 text-gold-500" />
                {pillar.caption}
            </span>
        </article>
    )
}

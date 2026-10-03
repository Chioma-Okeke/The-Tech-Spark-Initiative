"use client"

import { cn } from "cn"
import { scholarshipTiers } from "@/lib/data"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { motion } from "framer-motion"
import { ease } from "@/lib/animation-data"

const lineDuration = 1.2

const PhilosophySection = () => {
    return (
        <section className="bg-paper">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12">
                    <AnimatedSection className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iris-600">
                            The Philosophy
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                            An Opportunity to Learn. A Responsibility to Give Back.
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Every accepted Spark receives a 20% scholarship baseline. From
                            there, each Spark can voluntarily choose a higher scholarship
                            pathway based on the level of support they would like to receive.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection className="relative mx-auto grid max-w-5xl gap-4 sm:grid-cols-5">
                        <motion.div
                            variants={{
                                hidden: { clipPath: "inset(0% 100% 100% 0%)" },
                                visible: {
                                    clipPath: "inset(0% 0% 0% 0%)",
                                    transition: { duration: lineDuration, ease, delay: 0.8 },
                                },
                            }}
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-md:w-2 bg-linear-to-b sm:h-2 sm:w-full sm:bg-linear-to-r from-iris-500 via-iris-500/80 to-gold-500"
                        />
                        {scholarshipTiers.map((tier) => (
                            <div key={tier.percent} >
                                <div
                                    className={cn(
                                        "group relative flex h-full flex-col items-center rounded-2xl border p-5 text-center transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5",
                                        tier.highlight
                                            ? "border-gold-500 bg-ink-950"
                                            : "border-border bg-paper"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "grid size-12 place-items-center rounded-full text-sm font-bold transition-[scale] duration-500 ease-out group-hover:scale-110",
                                            tier.highlight
                                                ? "bg-gold-500 text-ink-950"
                                                : "bg-iris-100 text-iris-700"
                                        )}
                                    >
                                        {tier.percent}
                                    </span>
                                    <h3
                                        className={cn(
                                            "mt-4 text-base font-bold",
                                            tier.highlight ? "text-white" : "text-foreground"
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    <p
                                        className={cn(
                                            "mt-2 text-xs leading-relaxed",
                                            tier.highlight ? "text-white/70" : "text-muted-foreground"
                                        )}
                                    >
                                        {tier.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </AnimatedSection>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default PhilosophySection

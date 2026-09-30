"use client"

import { MotionConfig, motion } from "framer-motion"
import Image from "next/image"
import { innovationPillars } from "@/lib/data"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import PillarCard from "./pillar-card"
import { drawLineInoLab, float } from "@/lib/animation-data"



const InnovationLabSection = () => {
    return (
        <MotionConfig reducedMotion="user">
            <section className="@container dark relative overflow-hidden bg-ink-900 text-foreground">
                {/* top right glow blob */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_0%,var(--color-iris-950),transparent_70%)]"
                />
                {/* top left glow blob */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute opacity-40 inset-0 bg-[radial-gradient(50%_60%_at_0%_0%,var(--color-gold-400),transparent_30%)]"
                />

                <PaddingContainer className="relative py-16 md:py-24">
                    <MaxContainer className="space-y-14 md:space-y-16">
                        <div className="relative">
                            {/* from the section's top-left corner, half way to 50% / 95% of this block */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-24 bottom-[5%] left-[calc(50%-50cqw)] right-1/2 hidden text-aqua-400/80 lg:block"
                            >
                                <svg preserveAspectRatio="none" className="h-full w-full overflow-visible">
                                    <motion.line
                                        x1="0"
                                        y1="0"
                                        x2="50%"
                                        y2="50%"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        {...drawLineInoLab(0.2)}
                                    />
                                </svg>
                            </div>
                            {/* from the section's top-right corner, half way to 88% / 100% of this block */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-24 bottom-0 left-[88%] right-[calc(50%-50cqw)] hidden text-aqua-400/80 lg:block"
                            >
                                <svg preserveAspectRatio="none" className="h-full w-full overflow-visible">
                                    <motion.line
                                        x1="100%"
                                        y1="0"
                                        x2="50%"
                                        y2="50%"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        {...drawLineInoLab(0.4)}
                                    />
                                </svg>
                            </div>

                            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
                                <AnimatedSection className="relative z-10 text-center lg:text-left max-lg:flex items-center justify-center">
                                    <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-[70px] w-full max-w-142.75">
                                        <span className="block text-iris-400">TVI</span>
                                        <span className="block text-primary">Innovation Lab</span>
                                    </h2>
                                </AnimatedSection>

                                <AnimatedSection delay={0.15} className="relative z-10">
                                    {/* translucent brand blobs behind the illustration */}
                                    <motion.div
                                        {...float(8, 6)}
                                        className="absolute lg:left-[-4%] lg:top-[47%] size-12 rotate-20 rounded-[13px] bg-[#F5AC27]/20 sm:size-15"
                                    />
                                    <motion.div
                                        {...float(6, 7.5)}
                                        className="absolute right-0 top-[20%] lg:left-[-4%] lg:top-[64%] size-12 rotate-6 rounded-[13px] bg-[#D481F2]/20 sm:size-15"
                                    />

                                    <Image
                                        src="/innovators.png"
                                        alt="Three teammates collaborating around a kanban board"
                                        width={963}
                                        height={751}
                                        sizes="(min-width: 1024px) 640px, 100vw"
                                        className="relative max-lg:mx-auto h-auto w-full max-w-2xl object-contain lg:ml-auto lg:max-w-120.5"
                                    />
                                </AnimatedSection>
                            </div>
                            <motion.div
                                {...float(10, 8)}
                                className="hidden lg:block absolute left-[20%] bottom-[7%] size-14 -rotate-20 rounded-[13px] bg-[#D481F2]/20"
                            />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {innovationPillars.map((pillar, i) => (
                                <AnimatedSection key={pillar.name} delay={i * 0.1}>
                                    <PillarCard pillar={pillar} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </MaxContainer>
                </PaddingContainer>
            </section>
        </MotionConfig>
    )
}

export default InnovationLabSection

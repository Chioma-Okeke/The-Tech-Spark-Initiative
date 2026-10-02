"use client"

import { missionAndVision } from "@/lib/data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { cn } from "cn"
import { motion } from "framer-motion"
import { AnimatedSection } from "../shared/animated-section"

const ease = [0.22, 1, 0.36, 1] as const

const MissionAndVision = () => {
    return (
            <section className="relative overflow-hidden bg-[#101120] py-20 md:py-16 lg:py-28">
                <svg
                    aria-hidden
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/90 md:block"
                >
                    {/* draws in from the top edge once the section is in view */}
                    <motion.line
                        x1="80%"
                        y1="0%"
                        x2="100%"
                        y2="22%"
                        stroke="currentColor"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            pathLength: { duration: 1.4, ease, delay: 0.2 },
                            opacity: { duration: 0.3, delay: 0.2 },
                        }}
                    />
                </svg>
                <PaddingContainer>
                    <MaxContainer className="relative flex w-full flex-col gap-8 max-w-290 lg:h-94.25 lg:flex-row lg:justify-between">
                        {missionAndVision.map((item, index) => {
                            return (
                                <AnimatedSection
                                    key={index}
                                    delay={index * 0.2}
                                    className={cn("w-full lg:max-w-140.5", {
                                        "lg:self-end": item.name === "Vision"
                                    })}
                                >
                                    <div className="group w-full lg:max-h-70.5 p-8 md:p-10 lg:p-12 bg-[#1D2022]/40 relative overflow-hidden rounded-3xl border border-[#B5C5F7]/10 transition-colors duration-500 hover:border-[#B5C5F7]/25">
                                        {/* glow eases towards the card's centre on hover */}
                                        <div
                                            aria-hidden
                                            className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-white/15 blur-3xl transition-[translate,opacity] duration-700 ease-out group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:opacity-80"
                                        />
                                        <div className="relative space-y-6">
                                            <div className="flex items-center gap-3">
                                                <item.icon className={cn("size-6.5 transition-transform duration-500 ease-out group-hover:scale-110", {
                                                    "text-[#FFBA46]": item.name === "Mission",
                                                    "text-[#B5C5F7]": item.name === "Vision"
                                                })} />
                                                <h3 className="font-bold text-2xl sm:text-3xl text-[#E0E3E5]">{item.name}</h3>
                                            </div>
                                            <p className="text-base md:text-lg leading-relaxed text-[#C5C6D0]">{item.content}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </MaxContainer>
                </PaddingContainer>
            </section>
    )
}

export default MissionAndVision

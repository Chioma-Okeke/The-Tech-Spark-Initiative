"use client"

import { motion, type Variants } from "framer-motion"
import { drawLine, ease, fadeUp, floatIn, heroCopy } from "@/lib/animation-data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const teamFigures = [
    { x: 70, tone: "text-iris-400" },
    { x: 160, tone: "text-grey-300" },
    { x: 250, tone: "text-iris-500" },
] as const

// the team rises into place one by one, then the table settles beneath them
const illustration: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
}

const riseIn: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

const TeamIllustration = () => {
    return (
        <motion.svg
            aria-hidden
            viewBox="0 0 380 210"
            variants={illustration}
            initial="hidden"
            animate="visible"
            className="mx-auto h-auto w-full max-w-md"
        >
            {teamFigures.map((figure) => (
                <motion.g key={figure.x} variants={riseIn}>
                    <circle cx={figure.x + 32} cy={55} r="20" className="fill-ink-950" />
                    <rect
                        x={figure.x}
                        y={80}
                        width="64"
                        height="70"
                        rx="24"
                        className={figure.tone}
                        fill="currentColor"
                    />
                    <rect
                        x={figure.x + 8}
                        y={118}
                        width="48"
                        height="34"
                        rx="4"
                        className="fill-ink-950"
                    />
                </motion.g>
            ))}
            <motion.g variants={riseIn}>
                <rect x="20" y="168" width="340" height="14" rx="7" className="fill-paper" />
                <rect x="130" y="192" width="120" height="5" rx="2.5" className="fill-paper/70" />
                <rect x="165" y="205" width="50" height="5" rx="2.5" className="fill-paper/50" />
            </motion.g>
        </motion.svg>
    )
}

const GetInvolvedHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <motion.svg
                aria-hidden
                preserveAspectRatio="none"
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/40 lg:block"
            >
                <motion.line x1="0%" y1="46%" x2="24%" y2="-10%" stroke="currentColor" strokeWidth="1" custom={0} variants={drawLine} />
                <motion.line x1="76%" y1="-6%" x2="100%" y2="24%" stroke="currentColor" strokeWidth="1" custom={1} variants={drawLine} />
            </motion.svg>

            {/* corner blobs */}
            <motion.div
                {...floatIn(12, 6, 0.5)}
                className="pointer-events-none absolute left-10 top-1/3 hidden size-28 rounded-[44px] bg-iris-500/20 sm:block"
            />
            <motion.div
                {...floatIn(10, 7.5, 0.7)}
                className="pointer-events-none absolute right-16 top-1/2 hidden size-20 -translate-y-1/2 rounded-full bg-gold-500/20 sm:block"
            />

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="flex flex-col items-center text-center">
                    {/* each line of the headline lands in turn */}
                    <motion.h1
                        variants={heroCopy}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        <motion.span variants={fadeUp} className="block text-primary">
                            Shape the future
                        </motion.span>
                        <motion.span variants={fadeUp} className="block">
                            <span className="text-foreground">of </span>
                            <span className="text-iris-400">technology</span>
                        </motion.span>
                        <motion.span variants={fadeUp} className="block text-foreground">
                            with us
                        </motion.span>
                    </motion.h1>

                    <div className="mt-10 w-full max-w-lg">
                        <TeamIllustration />
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default GetInvolvedHeroSection

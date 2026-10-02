"use client"

import { cn } from "cn"
import { motion, type Variants } from "framer-motion"
import { drawLine, ease, fadeUp, floatIn, heroCopy } from "@/lib/animation-data"
import { scholarshipStats } from "@/lib/data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

// the figure appears, the connector path draws out from them,
// and the floating nodes pop in along it one by one
const figureIn: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.4 } },
}

const pathDraw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.4, ease, delay: 0.9 },
            opacity: { duration: 0.3, delay: 0.9 },
        },
    },
}

const nodeIn: Variants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease, delay: 1.1 + i * 0.15 },
    }),
}

// transform-box makes each node scale from its own centre, not the svg's corner
const nodeOrigin = "[transform-box:fill-box] origin-center"

const ScholarIllustration = () => {
    return (
        <motion.svg
            aria-hidden
            viewBox="0 0 260 300"
            initial="hidden"
            animate="visible"
            className="mx-auto h-auto w-full max-w-60"
        >
            {/* ground line */}
            <line x1="10" y1="260" x2="170" y2="260" stroke="currentColor" className="text-white/40" strokeWidth="1.5" />

            {/* figure */}
            <motion.g variants={figureIn}>
                <circle cx="70" cy="55" r="20" className="fill-ink-950" />
                <rect x="48" y="80" width="44" height="90" rx="20" className="fill-grey-300" />
                <rect x="40" y="90" width="30" height="80" rx="14" className="fill-iris-500" />
                <rect x="55" y="170" width="14" height="90" rx="6" className="fill-ink-950" />
                <rect x="75" y="170" width="14" height="90" rx="6" className="fill-ink-950" />
            </motion.g>

            {/* connector line to floating nodes */}
            <motion.path
                d="M110 90 C 150 60, 150 130, 190 110 S 230 40, 245 30"
                fill="none"
                stroke="currentColor"
                className="text-white/30"
                strokeWidth="1.5"
                variants={pathDraw}
            />

            {/* floating nodes, in the order the path reaches them */}
            <motion.rect custom={0} variants={nodeIn} x="95" y="130" width="22" height="22" rx="6" className={cn("fill-paper", nodeOrigin)} />
            <motion.circle custom={1} variants={nodeIn} cx="192" cy="112" r="14" className={cn("fill-gold-500", nodeOrigin)} />
            <motion.rect custom={2} variants={nodeIn} x="225" y="75" width="20" height="20" rx="6" className={cn("fill-iris-700", nodeOrigin)} />
            <motion.rect custom={3} variants={nodeIn} x="175" y="20" width="26" height="30" rx="4" className={cn("fill-paper", nodeOrigin)} />
            <motion.circle custom={4} variants={nodeIn} cx="245" cy="30" r="12" className={cn("fill-iris-600", nodeOrigin)} />
        </motion.svg>
    )
}

const ScholarshipsHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-950 text-foreground">
            {/* decorative diagonal lines */}
            <motion.svg
                aria-hidden
                preserveAspectRatio="none"
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/40 lg:block"
            >
                <motion.line x1="-4%" y1="4%" x2="18%" y2="24%" stroke="currentColor" strokeWidth="1" custom={0} variants={drawLine} />
                <motion.line x1="86%" y1="60%" x2="104%" y2="100%" stroke="currentColor" strokeWidth="1" custom={1} variants={drawLine} />
            </motion.svg>

            {/* corner blobs */}
            <motion.div
                {...floatIn(12, 6.5, 0.6)}
                className="pointer-events-none absolute bottom-16 left-[62%] hidden size-32 rounded-[44px] bg-iris-500/25 sm:block"
            />
            <motion.div
                {...floatIn(10, 8, 0.8)}
                className="pointer-events-none absolute bottom-24 left-[52%] hidden size-24 rounded-full bg-gold-500/25 sm:block"
            />

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div variants={heroCopy} initial="hidden" animate="visible">
                        <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                            <motion.span variants={fadeUp} className="block text-primary">
                                Your Scholarship
                            </motion.span>
                            <motion.span variants={fadeUp} className="block text-iris-300">
                                Your Impact
                            </motion.span>
                        </h1>
                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
                        >
                            Every Spark starts with an opportunity. Choose the scholarship
                            pathway that works for you — and turn that opportunity into
                            catalytic impact for our community.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 grid max-w-lg grid-cols-3 gap-4 rounded-2xl bg-ink-900/80 p-6"
                        >
                            {scholarshipStats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={cn(
                                        "text-center sm:text-left",
                                        index !== 0 && "border-l border-white/10 pl-4"
                                    )}
                                >
                                    <p
                                        className={cn(
                                            "text-xl font-extrabold sm:text-2xl",
                                            index === 0 ? "text-gold-400" : "text-iris-300"
                                        )}
                                    >
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <div className="relative z-10 hidden lg:block">
                        <ScholarIllustration />
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default ScholarshipsHeroSection

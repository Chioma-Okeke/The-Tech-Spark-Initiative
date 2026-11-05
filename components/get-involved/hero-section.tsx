"use client"

import { motion } from "framer-motion"
import { drawLine, ease, fadeUp, floatIn, heroCopy } from "@/lib/animation-data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import Image from "next/image"

const GetInvolvedHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <motion.svg
                aria-hidden
                preserveAspectRatio="none"
                initial="hidden"
                animate="visible"
                className="pointer-events-none absolute inset-0 h-full w-full text-aqua-400/80"
            >
                {/* mirrored top-to-bottom (y → 100% − y): runs from the left edge down off the bottom */}
                <motion.line x1="0%" y1="54%" x2="24%" y2="110%" className="hidden lg:block" stroke="currentColor" strokeWidth="1" custom={0} variants={drawLine} />
                <motion.line x1="76%" y1="-6%" x2="100%" y2="24%" stroke="currentColor" strokeWidth="1" custom={1} variants={drawLine} />
            </motion.svg>

            {/* corner blobs */}
            <motion.div
                {...floatIn(12, 6, 0.5)}
                className="pointer-events-none absolute left-16 lg:left-32 top-1/3 size-16 lg:size-28 rounded-2xl lg:rounded-[44px] bg-iris-500/20 sm:block"
            />
            <motion.div
                {...floatIn(10, 5, 0.7)}
                className="pointer-events-none absolute right-16 lg:right-32 bottom-[15%] size-20 rounded-full bg-gold-500/20 sm:block"
            />

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="flex flex-col gap-18 items-center text-center">
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
                            <span className="text-primary">of </span>
                            <span className="text-iris-400">technology</span>
                        </motion.span>
                        <motion.span variants={fadeUp} className="block text-iris-400">
                            with us
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease, delay: 0.25 }}
                        className="relative z-10 overflow-hidden w-95.5 h-51.5 lg:col-span-1"
                    >
                        <motion.div
                            initial={{ scale: 1.08 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.6, ease, delay: 0.25 }}
                            className="absolute inset-0"
                        >
                            <Image src="/team-collab-illustration.png" fill className="object-top object-cover" alt="Illustration" />
                        </motion.div>
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default GetInvolvedHeroSection

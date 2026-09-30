import { type Transition, type Variants } from "framer-motion"

export const ease = [0.22, 1, 0.36, 1] as const

export const heroCopy: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease } },
}

export const drawLine: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.4, ease, delay: 0.5 + i * 0.15 },
            opacity: { duration: 0.3, delay: 0.5 + i * 0.15 },
        },
    }),
}

export const easeInoLab = [0.22, 1, 0.36, 1] as const

export const drawLineInoLab = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
    transition: {
        pathLength: { duration: 1.6, easeInoLab, delay },
        opacity: { duration: 0.3, delay },
    },
})

// slow, barely-there drift for the brand blobs
export const float = (distance: number, duration: number): { animate: { y: number[] }; transition: Transition } => ({
    animate: { y: [0, -distance, 0] },
    transition: { duration, ease: "easeInOut", repeat: Infinity },
})
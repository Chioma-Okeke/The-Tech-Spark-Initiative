'use client'
import { HTMLMotionProps, motion, type Variants } from "framer-motion";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
    delay?: number
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
}

export const AnimatedSection = ({
    children,
    className,
    delay = 0,
    variants = defaultVariants,
    transition,
    viewport,
    ...props
}: AnimatedSectionProps) => {
    return (
        <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{
                once: true,
                amount: "some",
                ...viewport
            }}
            variants={variants}
            transition={{ duration: 0.9, ease: "easeOut", delay, ...transition }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
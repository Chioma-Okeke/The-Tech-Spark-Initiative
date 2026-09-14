import { cn } from "cn"
import { methodologySteps } from "@/lib/data"
import type { MethodologyStep } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const iconStyles: Record<MethodologyStep["tone"], string> = {
    neutral: "bg-ink-600 text-white shadow-[0_0_30px_-6px_var(--color-iris-400)]",
    iris: "bg-iris-500 text-white shadow-[0_0_30px_-4px_var(--color-iris-500)]",
    gold: "bg-gold-500 text-ink-950 shadow-[0_0_30px_-4px_var(--color-gold-500)]",
    "gold-outline":
        "border border-gold-500 text-gold-400 shadow-[0_0_30px_-6px_var(--color-gold-500)]",
}

const MethodologySection = () => {
    return (
        <section className="dark bg-ink-900 text-foreground">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12 md:space-y-16">
                    <h2 className="text-center text-3xl font-bold sm:text-4xl">
                        The TVI Methodology
                    </h2>

                    <div className="relative">
                        {/* connector line — shows through the gaps between cards */}
                        <div className="pointer-events-none absolute inset-x-0 top-13 hidden h-px bg-linear-to-r from-iris-500/60 via-iris-500/40 to-gold-500/60 lg:top-15 lg:block" />

                        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                            {methodologySteps.map((step) => (
                                <li
                                    key={step.name}
                                    className="flex flex-col items-center rounded-2xl border border-white/5 bg-ink-850 p-6 text-center sm:p-8"
                                >
                                    <span
                                        className={cn(
                                            "grid size-14 place-items-center rounded-full",
                                            iconStyles[step.tone]
                                        )}
                                    >
                                        <step.icon className="size-6" />
                                    </span>
                                    <h3 className="mt-5 text-base font-bold uppercase tracking-wider">
                                        {step.name}
                                    </h3>
                                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                                        {step.caption}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MethodologySection

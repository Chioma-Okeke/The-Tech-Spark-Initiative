import { cn } from "cn"
import { sparkGlossary } from "@/lib/data"
import type { SparkGlossaryEntry } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { toneStylesAcademyPage } from "@/lib/styling-data"
import { AnimatedSection } from "../shared/animated-section"

const MeetTheSparksSection = () => {
    return (
        <section className="bg-grey-100">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12">
                    <AnimatedSection className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            First, meet the <span className="text-primary">Sparks</span>
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground lg:text-lg">
                            At TVI, learners aren&apos;t just students. They&apos;re{" "}
                            <span className="font-semibold text-primary">Sparks</span>, people
                            learning, building, collaborating and growing with purpose.
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                        {sparkGlossary.map((entry, i) => (
                            <AnimatedSection key={entry.term} delay={0.15 + i * 0.15}>
                                <SparkCard entry={entry} />
                            </AnimatedSection>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MeetTheSparksSection

const SparkCard = ({ entry }: { entry: SparkGlossaryEntry }) => {
    const tone = toneStylesAcademyPage[entry.tone]
    const Icon = entry.icon

    return (
        <article className="group relative h-full overflow-hidden rounded-3xl border border-black/5 bg-paper p-6 shadow-sm transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-8">
            {/* corner glow swells gently on hover */}
            <div
                aria-hidden
                className={cn(
                    "pointer-events-none absolute -right-16 -top-20 size-56 rounded-full blur-3xl transition-[scale,opacity] duration-700 ease-out group-hover:scale-125 group-hover:opacity-80",
                    tone.glow
                )}
            />
            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <span
                        className={cn(
                            "grid size-14 place-items-center rounded-2xl transition-[rotate,scale] duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105",
                            tone.iconWrap
                        )}
                    >
                        <Icon className="size-6" />
                    </span>
                    <span
                        className={cn(
                            "rounded-full border px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-widest",
                            tone.badge
                        )}
                    >
                        {entry.badge}
                    </span>
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-3xl lg:text-4xl font-extrabold uppercase text-foreground">
                        {entry.term}
                    </h3>
                    <span
                        className={cn(
                            "font-mono text-xs font-semibold uppercase tracking-widest",
                            tone.subtitle
                        )}
                    >
                        {entry.subtitle}
                    </span>
                </div>

                <p className="mt-3 inline-block rounded-md bg-grey-200 px-3 py-1.5 font-mono text-[0.7rem] lg:text-[12px] uppercase tracking-wider text-muted-foreground">
                    Formula: {entry.formula}
                </p>

                <p className="mt-5 max-lg:text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                </p>
            </div>
        </article>
    )
}

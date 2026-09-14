import { cn } from "cn"
import { sparkGlossary } from "@/lib/data"
import type { SparkGlossaryEntry } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const toneStyles: Record<
    SparkGlossaryEntry["tone"],
    { glow: string; iconWrap: string; subtitle: string; badge: string }
> = {
    gold: {
        glow: "bg-gold-500/20",
        iconWrap: "bg-ink-900 text-primary",
        subtitle: "text-gold-600",
        badge: "border-gold-500/40 text-gold-600",
    },
    iris: {
        glow: "bg-iris-500/20",
        iconWrap: "bg-iris-950 text-iris-300",
        subtitle: "text-iris-600",
        badge: "border-iris-500/40 text-iris-600",
    },
}

const SparkCard = ({ entry }: { entry: SparkGlossaryEntry }) => {
    const tone = toneStyles[entry.tone]
    const Icon = entry.icon

    return (
        <article className="relative overflow-hidden rounded-3xl border border-black/5 bg-paper p-6 shadow-sm sm:p-8">
            <div
                aria-hidden
                className={cn(
                    "pointer-events-none absolute -right-16 -top-20 size-56 rounded-full blur-3xl",
                    tone.glow
                )}
            />
            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <span
                        className={cn(
                            "grid size-14 place-items-center rounded-2xl",
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
                    <h3 className="text-3xl font-extrabold uppercase text-foreground">
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

                <p className="mt-3 inline-block rounded-md bg-grey-200 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    Formula: {entry.formula}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                </p>
            </div>
        </article>
    )
}

const MeetTheSparksSection = () => {
    return (
        <section className="bg-grey-100">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            First, meet the <span className="text-primary">Sparks</span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            At TVI, learners aren&apos;t just students. They&apos;re{" "}
                            <span className="font-semibold text-primary">Sparks</span> — people
                            learning, building, collaborating and growing with purpose.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                        {sparkGlossary.map((entry) => (
                            <SparkCard key={entry.term} entry={entry} />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MeetTheSparksSection

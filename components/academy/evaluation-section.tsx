import { cn } from "cn"
import { Award, CircleCheck, CodeBlock, Star } from "@/icons"
import { evaluationCriteria } from "@/lib/data"
import type { EvaluationCriterion } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const toneStyles: Record<
    EvaluationCriterion["tone"],
    { weight: string; accent: string; ring: string; tag: string; badgeIcon: typeof Star }
> = {
    gold: {
        weight: "text-gold-400",
        accent: "text-gold-400",
        ring: "border-gold-500/25",
        tag: "border-gold-500/25 bg-gold-500/10 text-gold-400",
        badgeIcon: CircleCheck,
    },
    iris: {
        weight: "text-iris-400",
        accent: "text-iris-300",
        ring: "border-iris-500/25",
        tag: "border-iris-500/25 bg-iris-500/10 text-iris-300",
        badgeIcon: Star,
    },
}

const EvaluationCard = ({ criterion }: { criterion: EvaluationCriterion }) => {
    const tone = toneStyles[criterion.tone]
    const BadgeIcon = tone.badgeIcon
    const Icon = criterion.icon

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border bg-ink-850/70 p-6 backdrop-blur-xl sm:p-8",
                tone.ring
            )}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <span
                        className={cn(
                            "inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
                            tone.accent
                        )}
                    >
                        <BadgeIcon className="size-3.5" />
                        {criterion.badge}
                    </span>
                    <Icon className="size-5 shrink-0 text-muted-foreground" />
                </div>

                <p className={cn("mt-5 text-5xl font-extrabold tracking-tight", tone.weight)}>
                    {criterion.weight}
                </p>
                <h3 className="mt-2 text-xl font-bold uppercase">{criterion.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {criterion.description}
                </p>

                <hr className="my-5 border-white/10" />

                <ul className="flex flex-wrap gap-2">
                    {criterion.tags.map((tag) => (
                        <li
                            key={tag}
                            className={cn(
                                "rounded-md border px-2.5 py-1 text-[0.7rem] font-medium tracking-wide",
                                tone.tag
                            )}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const EvaluationSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_100%_at_20%_100%,var(--color-iris-950),transparent_70%)]"
            />
            <PaddingContainer className="relative py-16 md:py-24">
                <MaxContainer className="space-y-12">
                    {/* heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-iris-400">
                            <span className="size-1.5 rounded-full bg-iris-400" />
                            Evaluation Philosophy
                        </span>
                        <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                            How Sparks Are Evaluated
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            At TVI, we measure more than what you know. We also look at how you grow,
                            participate, lead and contribute.
                        </p>
                    </div>

                    {/* split progress bar */}
                    <div className="mx-auto max-w-4xl">
                        <div className="flex flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between">
                            <span className="inline-flex items-center gap-1.5 text-gold-400">
                                <CodeBlock className="size-3.5" />
                                60% Academic Performance
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-iris-300">
                                Character &amp; Participation 40%
                                <Award className="size-3.5" />
                            </span>
                        </div>
                        <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-white/5">
                            <div className="w-3/5 bg-gold-500" />
                            <div className="w-2/5 bg-iris-500" />
                        </div>
                    </div>

                    {/* criteria cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {evaluationCriteria.map((criterion, index) => (
                            <div key={criterion.label} className={cn(index === 1 && "md:mt-12")}>
                                <EvaluationCard criterion={criterion} />
                            </div>
                        ))}
                    </div>

                    {/* footer note */}
                    <div className="mx-auto max-w-2xl border-t border-white/10 pt-8 text-center">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-aqua-400">
                            Technical Growth + Character Growth
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Your technical ability matters. So does the way you learn, collaborate,
                            communicate, take initiative and contribute.
                        </p>
                        <p className="mt-3 font-bold text-primary">At TVI, we develop both.</p>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default EvaluationSection

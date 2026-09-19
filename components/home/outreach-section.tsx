import Image from "next/image"
import { cn } from "cn"
import { CircleCheckBig } from "lucide-react"
import { compoundingSteps, outreachPillars } from "@/lib/data"
import type { OutreachPillar } from "@/types"
import { ArrowRight } from "@/icons"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const PillarCard = ({ pillar }: { pillar: OutreachPillar }) => {
    const Icon = pillar.icon

    return (
        <article className="flex flex-col rounded-2xl border border-white/10 bg-ink-850/60 p-6 backdrop-blur-xl sm:p-8">
            <span
                className={cn(
                    "grid size-11 place-items-center rounded-xl",
                    pillar.highlight ? "bg-gold-500/15 text-gold-400" : "bg-iris-500/15 text-iris-300"
                )}
            >
                <Icon className="size-5" />
            </span>
            <h3
                className={cn(
                    "mt-6 text-xl font-bold",
                    pillar.highlight ? "text-gold-400" : "text-foreground"
                )}
            >
                {pillar.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
            </p>
            <hr className="mt-6 border-white/10" />
            <span className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <CircleCheckBig className="size-4 shrink-0 text-gold-400" />
                {pillar.caption}
            </span>
        </article>
    )
}

const OutreachSection = () => {
    return (
        <section className="dark bg-ink-950 text-foreground">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12 md:space-y-16">
                    <div className="space-y-10 md:space-y-12">
                        <div className="overflow-hidden rounded-3xl">
                            <Image
                                src="/students.png"
                                alt="A volunteer helping a mother and child with a laptop at a community learning session"
                                width={1600}
                                height={640}
                                sizes="(min-width: 1280px) 1280px, 100vw"
                                className="h-64 w-full object-cover sm:h-80 md:h-96"
                            />
                        </div>

                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                                Helping People &amp; Multiplying Impact
                            </h2>
                            <p className="mt-6 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
                                TVI Outreaches
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Technology is our tool, but human uplift is our devotion. We invest
                                deeply in grassroots enablement and compound compassion
                                exponentially.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {outreachPillars.map((pillar) => (
                            <PillarCard key={pillar.name} pillar={pillar} />
                        ))}
                    </div>

                    <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--color-iris-950),var(--color-iris-800))] p-8 md:p-12">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_100%_0%,var(--color-iris-600)/30%,transparent_70%)]"
                        />
                        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-md">
                                <span className="inline-block rounded-full border border-gold-500/40 px-4 py-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
                                    The 10x Compounding Effect
                                </span>
                                <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                                    Multiplication, Not Addition
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-iris-100 sm:text-base">
                                    Every life touched becomes an active torchbearer. Our model
                                    isn&apos;t just about training one Spark — it is designed to
                                    ignite self-propagating waves of change across African
                                    generations.
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-3 sm:gap-4">
                                {compoundingSteps.map((step, index) => (
                                    <div key={step.label} className="flex items-center gap-3 sm:gap-4">
                                        <div
                                            className={cn(
                                                "flex flex-col items-center gap-1.5 rounded-2xl px-5 py-5 text-center sm:px-6",
                                                step.highlight
                                                    ? "bg-gold-500 text-primary-foreground"
                                                    : "bg-ink-900/70 text-foreground"
                                            )}
                                        >
                                            <span className="text-2xl font-extrabold sm:text-3xl">
                                                {step.value}
                                            </span>
                                            <span
                                                className={cn(
                                                    "font-mono text-[0.6rem] font-semibold uppercase tracking-[0.15em]",
                                                    step.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                                                )}
                                            >
                                                {step.label}
                                            </span>
                                        </div>
                                        {index < compoundingSteps.length - 1 ? (
                                            index === compoundingSteps.length - 2 ? (
                                                <span className="text-2xl font-bold text-gold-400" aria-hidden>
                                                    &#8734;
                                                </span>
                                            ) : (
                                                <ArrowRight className="size-5 shrink-0 text-gold-400" />
                                            )
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default OutreachSection

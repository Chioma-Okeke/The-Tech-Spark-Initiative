import Image from "next/image"
import { cn } from "cn"
import { innovationPillars } from "@/lib/data"
import type { InnovationPillar } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const PillarCard = ({ pillar }: { pillar: InnovationPillar }) => {
    const Icon = pillar.icon

    return (
        <article
            className={cn(
                "flex flex-col rounded-2xl border p-6 backdrop-blur-xl md:p-8",
                pillar.highlight
                    ? "border-gold-500/40 bg-iris-950"
                    : "border-iris-800/30 bg-ink-850/60"
            )}
        >
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
            <span
                className={cn(
                    "mt-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
                    pillar.highlight ? "text-gold-400" : "text-muted-foreground"
                )}
            >
                {pillar.caption}
            </span>
        </article>
    )
}

const InnovationLabSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_0%,var(--color-iris-950),transparent_70%)]"
            />

            <PaddingContainer className="relative py-16 md:py-24">
                <MaxContainer className="space-y-14 md:space-y-16">
                    <div className="relative">
                        {/* decorative diagonal lines */}
                        <svg
                            aria-hidden
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/40 lg:block"
                        >
                            <line x1="0%" y1="95%" x2="14%" y2="35%" stroke="currentColor" strokeWidth="1" />
                            <line x1="88%" y1="100%" x2="100%" y2="5%" stroke="currentColor" strokeWidth="1" />
                        </svg>

                        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
                            <div className="relative z-10 text-center lg:text-left">
                                <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                                    <span className="block text-iris-400">TVI</span>
                                    <span className="block text-primary">Innovation Lab</span>
                                </h2>
                            </div>

                            <div className="relative z-10">
                                {/* translucent brand blobs behind the illustration */}
                                <div className="absolute left-[6%] top-[42%] size-16 -rotate-6 rounded-[28px] bg-ink-700/60 sm:size-20" />
                                <div className="absolute left-[16%] top-[64%] size-14 rotate-6 rounded-[24px] bg-iris-800/50 sm:size-16" />

                                <Image
                                    src="/innovators.png"
                                    alt="Three teammates collaborating around a kanban board"
                                    width={963}
                                    height={751}
                                    sizes="(min-width: 1024px) 640px, 100vw"
                                    className="relative h-auto w-full max-w-2xl object-contain lg:ml-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {innovationPillars.map((pillar) => (
                            <PillarCard key={pillar.name} pillar={pillar} />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default InnovationLabSection

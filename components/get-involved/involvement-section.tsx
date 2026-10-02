import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"
import { ArrowRight } from "@/icons"
import { involvementOptions } from "@/lib/data"
import type { InvolvementOption } from "@/types"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"

// shared hover: a gentle lift; each layout adds its own detail on top
const cardHover = "group h-full transition-[translate] duration-500 ease-out hover:-translate-y-1"

const OptionCard = ({ option }: { option: InvolvementOption }) => {
    const Icon = option.icon

    if (option.layout === "photo") {
        return (
            <article
                className={cn(
                    "relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl",
                    cardHover
                )}
            >
                <Image
                    src="/futuristic-woman.png"
                    alt=""
                    fill
                    className="object-cover object-top transition-[scale] duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/60 to-ink-950/10" />
                <div className="relative p-6 sm:p-8">
                    <Icon className="size-7 text-primary" />
                    <h3 className="mt-4 text-xl font-bold text-white">{option.name}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                        {option.description}
                    </p>
                    <Link
                        href={option.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
                    >
                        {option.ctaLabel}
                        <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                </div>
            </article>
        )
    }

    if (option.layout === "accent") {
        return (
            <article
                className={cn(
                    "relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl bg-ink-700 p-6 sm:p-8",
                    cardHover
                )}
            >
                <span className="ml-auto grid size-11 place-items-center rounded-full border border-white/25 text-white/80 transition-[rotate,border-color] duration-500 ease-out group-hover:rotate-12 group-hover:border-white/50">
                    <Icon className="size-5" />
                </span>
                <div>
                    <h3 className="text-xl font-bold text-white">{option.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                        {option.description}
                    </p>
                    <Link
                        href={option.href}
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "mt-6 h-auto w-full rounded-lg border-white/30 bg-transparent px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                        )}
                    >
                        {option.ctaLabel}
                    </Link>
                </div>
            </article>
        )
    }

    // "plain"
    return (
        <article
            className={cn(
                "flex flex-col rounded-3xl border border-transparent bg-ink-850 p-6 transition-colors sm:p-8 hover:border-white/10",
                cardHover
            )}
        >
            <h3 className="inline-flex items-center gap-2 text-xl font-bold text-white">
                {option.name}
                <Icon className="size-4 text-primary" />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {option.description}
            </p>
            <Link
                href={option.href}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary"
            >
                {option.ctaLabel}
                <ArrowRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>
        </article>
    )
}

const InvolvementSection = () => {
    return (
        <section className="dark bg-ink-900 text-foreground">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="grid gap-6 md:grid-cols-3">
                    {involvementOptions.map((option, i) => (
                        <AnimatedSection
                            key={option.name}
                            delay={i * 0.1}
                            className={option.gridClass}
                        >
                            <OptionCard option={option} />
                        </AnimatedSection>
                    ))}
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default InvolvementSection

import { cn } from "cn"
import { coreValues } from "@/lib/data"
import type { CoreValue } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const toneStyles: Record<
    CoreValue["tone"],
    { card: string; chip: string; icon: string }
> = {
    neutral: {
        card: "bg-gold-100/20",
        chip: "bg-grey-100 text-foreground",
        icon: "text-foreground",
    },
    greige: {
        card: "bg-[#F4F0EA] border-[#E0E3E5] border lg:py-20 h-auto",
        chip: "bg-white/70 text-foreground",
        icon: "text-foreground",
    },
    iris: {
        card: "bg-[#F2E7FD]",
        chip: "bg-iris-600/10 text-iris-600",
        icon: "text-iris-600",
    },
    gold: {
        card: "bg-gold-100",
        chip: "bg-white/70 text-gold-600",
        icon: "text-gold-600",
    },
}

const cardBase = "rounded-3xl p-6 md:p-8"
const titleClass = "text-xl font-bold text-foreground"
const descClass = "text-sm leading-relaxed text-muted-foreground"

const ValueCard = ({ value }: { value: CoreValue }) => {
    const tone = toneStyles[value.tone]
    const Icon = value.icon

    if (value.layout === "feature") {
        return (
            <article
                className={cn(cardBase, "flex flex-col justify-between", tone.card, value.gridClass)}
            >
                <span className={cn("grid size-11 lg:size-13 place-items-center rounded-full max-lg:bg-transparent", tone.chip)}>
                    <Icon className="size-5 lg:size-7" />
                </span>
                <div className="mt-10 space-y-2">
                    <h3 className={titleClass}>{value.name}</h3>
                    <p className={descClass}>{value.description}</p>
                </div>
            </article>
        )
    }

    if (value.layout === "inline") {
        return (
            <article
                className={cn(cardBase, "flex items-start gap-4", tone.card, value.gridClass, {
                    "lg:py-15": value.name == "Innovation"
                })}
            >
                <span
                    className={cn(
                        "grid size-11 lg:size-14 place-items-center rounded-full max-lg:bg-transparent",
                        tone.chip
                    )}
                >
                    <Icon className={cn("", {
                        "lg:w-6 lg:h-7 max-lg:size-5": value.name == "Innovation",
                        "size-5": value.name == "Impact"
                    })} />
                </span>
                <div className="space-y-2 max-w-118.25">
                    <h3 className={titleClass}>{value.name}</h3>
                    <p className={descClass}>{value.description}</p>
                </div>
            </article>
        )
    }

    if (value.layout === "banner") {
        return (
            <article
                className={cn(
                    cardBase,
                    "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                    tone.card,
                    value.gridClass
                )}
            >
                <div className="flex items-center gap-3">
                    <Icon className={cn("size-6 shrink-0", tone.icon)} />
                    <h3 className={titleClass}>{value.name}</h3>
                </div>
                <p className={cn(descClass, "md:max-w-md md:text-right")}>{value.description}</p>
            </article>
        )
    }

    // "corner"
    return (
        <article className={cn(cardBase, "flex flex-col", tone.card, value.gridClass)}>
            <div className="flex items-start justify-between gap-3">
                <h3 className={titleClass}>{value.name}</h3>
                <Icon className={cn("size-5 shrink-0", tone.icon)} />
            </div>
            <p className={cn(descClass, "mt-3")}>{value.description}</p>
        </article>
    )
}

const CoreValuesSection = () => {
    return (
        <section className="bg-[#F8FAFC]">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-10 md:space-y-12 max-w-292.75">
                    <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
                        Core Values
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {coreValues.map((value) => (
                            <ValueCard key={value.name} value={value} />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default CoreValuesSection

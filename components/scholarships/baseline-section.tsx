import { cn } from "cn"
import { Check } from "lucide-react"
import { baselineOptions } from "@/lib/data"
import type { BaselineOption } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const OptionCard = ({ option }: { option: BaselineOption }) => {
    const Icon = option.icon

    return (
        <article
            className={cn(
                "flex flex-col rounded-2xl p-6 sm:p-8",
                option.highlight ? "bg-ink-950 text-white" : "bg-grey-100 text-foreground"
            )}
        >
            <span
                className={cn(
                    "inline-flex w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest",
                    option.highlight
                        ? "bg-gold-500 text-ink-950"
                        : "text-muted-foreground"
                )}
            >
                {option.eyebrow}
            </span>

            <span
                className={cn(
                    "mt-4 grid size-11 place-items-center rounded-xl",
                    option.highlight ? "bg-white/10 text-gold-400" : "bg-iris-100 text-iris-600"
                )}
            >
                <Icon className="size-5" />
            </span>

            <h3 className="mt-4 text-lg font-bold">{option.title}</h3>
            <p
                className={cn(
                    "mt-3 text-sm leading-relaxed",
                    option.highlight ? "text-white/75" : "text-muted-foreground"
                )}
            >
                {option.description}
            </p>

            <hr className={cn("my-5", option.highlight ? "border-white/10" : "border-border")} />

            <ul className="space-y-2">
                {option.checklist.map((item) => (
                    <li
                        key={item}
                        className={cn(
                            "flex items-start gap-2 text-sm",
                            option.highlight ? "text-white/80" : "text-muted-foreground"
                        )}
                    >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    )
}

const BaselineSection = () => {
    return (
        <section className="bg-paper">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <span className="inline-flex w-fit rounded-full bg-iris-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-iris-700">
                                Universal Foundation
                            </span>
                            <h2 className="mt-4 max-w-lg text-3xl font-extrabold text-foreground sm:text-4xl">
                                The Baseline: Every Spark Starts Here
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Regardless of your scholarship level, all enrolled Sparks complete
                            the core foundational requirements:{" "}
                            <span className="font-semibold text-foreground">
                                Project 1 OR Project 2 + Capstone Project 3
                            </span>
                            .
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {baselineOptions.map((option) => (
                            <OptionCard key={option.title} option={option} />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BaselineSection

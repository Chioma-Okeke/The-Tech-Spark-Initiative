import { cn } from "cn"
import { scholarshipTiers } from "@/lib/data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const PhilosophySection = () => {
    return (
        <section className="bg-paper">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iris-600">
                            The Philosophy
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                            An Opportunity to Learn. A Responsibility to Give Back.
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Every accepted Spark receives a 20% scholarship baseline. From
                            there, each Spark can voluntarily choose a higher scholarship
                            pathway based on the level of support they would like to receive.
                        </p>
                    </div>

                    <div className="relative mx-auto grid max-w-5xl gap-4 sm:grid-cols-5">
                        <div className="pointer-events-none absolute inset-x-6 top-14 hidden h-px bg-border sm:block" />
                        {scholarshipTiers.map((tier) => (
                            <div
                                key={tier.percent}
                                className={cn(
                                    "relative flex flex-col items-center rounded-2xl border p-5 text-center",
                                    tier.highlight
                                        ? "border-gold-500 bg-ink-950"
                                        : "border-border bg-paper"
                                )}
                            >
                                <span
                                    className={cn(
                                        "grid size-12 place-items-center rounded-full text-sm font-bold",
                                        tier.highlight
                                            ? "bg-gold-500 text-ink-950"
                                            : "bg-iris-100 text-iris-700"
                                    )}
                                >
                                    {tier.percent}
                                </span>
                                <h3
                                    className={cn(
                                        "mt-4 text-base font-bold",
                                        tier.highlight ? "text-white" : "text-foreground"
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={cn(
                                        "mt-2 text-xs leading-relaxed",
                                        tier.highlight ? "text-white/70" : "text-muted-foreground"
                                    )}
                                >
                                    {tier.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default PhilosophySection

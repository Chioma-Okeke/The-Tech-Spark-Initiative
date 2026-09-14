import { cn } from "cn"
import { multiplierSteps } from "@/lib/data"
import { Button } from "../ui/button"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const MultiplierSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-950 text-foreground">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(60%_100%_at_50%_100%,var(--color-iris-950),transparent_70%)]"
            />

            <PaddingContainer className="relative py-16 md:py-24">
                <MaxContainer className="space-y-16">
                    <div className="space-y-10 text-center">
                        <div className="mx-auto max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                                The Multiplier Effect
                            </span>
                            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                                The Opportunity Doesn&apos;t End With You.
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Every Spark empowered creates a ripple effect across families,
                                startups, and open-source ecosystems.
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                            {multiplierSteps.map((step) => (
                                <div
                                    key={step.index}
                                    className={cn(
                                        "rounded-xl border p-4 text-center",
                                        step.highlight
                                            ? "border-gold-500/40 bg-iris-950"
                                            : "border-white/10 bg-ink-900"
                                    )}
                                >
                                    <p
                                        className={cn(
                                            "font-mono text-[0.65rem]",
                                            step.highlight ? "text-gold-400" : "text-muted-foreground"
                                        )}
                                    >
                                        {step.index}
                                    </p>
                                    <p
                                        className={cn(
                                            "mt-1 text-sm font-bold",
                                            step.highlight ? "text-gold-400" : "text-foreground"
                                        )}
                                    >
                                        {step.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mx-auto max-w-2xl text-sm italic leading-relaxed text-muted-foreground sm:text-base">
                            &ldquo;Talent is evenly distributed across our continent; opportunity
                            is not. When we turn our learning into service, we bridge the gap
                            forever.&rdquo;
                        </p>
                    </div>

                    <div className="space-y-6 text-center">
                        <h3 className="text-3xl font-extrabold sm:text-5xl">
                            Ready to Choose Your Path?
                        </h3>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Start your TVI journey, choose the scholarship pathway that fits
                            your circumstances, and turn your opportunity into impact.
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Button className="h-auto w-full rounded-full px-8 py-4 text-xs font-bold tracking-[0.15em] sm:w-auto">
                                APPLY NOW
                            </Button>
                            <Button
                                variant="outline"
                                className="h-auto w-full rounded-full border-white/30 bg-transparent px-8 py-4 text-xs font-bold tracking-[0.15em] text-foreground hover:bg-white/10 sm:w-auto"
                            >
                                View Programmes
                            </Button>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MultiplierSection

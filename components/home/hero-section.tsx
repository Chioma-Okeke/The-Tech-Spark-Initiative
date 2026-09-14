import { cn } from "cn"
import { journeySteps } from "@/lib/data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { Button } from "../ui/button"
import ImageIllustration from "./image-illustration"

const HeroSection = () => {
    return (
        <section className="dark overflow-hidden bg-ink-900 text-foreground">
            {/* ---------- Hero ---------- */}
            <div className="relative">
                {/* decorative diagonal lines */}
                <svg
                    aria-hidden
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/40 lg:block"
                >
                    <line x1="0%" y1="100%" x2="72%" y2="-5%" stroke="currentColor" strokeWidth="1" />
                    <line x1="12%" y1="105%" x2="88%" y2="6%" stroke="currentColor" strokeWidth="1" />
                    <line x1="46%" y1="118%" x2="99%" y2="18%" stroke="currentColor" strokeWidth="1" />
                </svg>

                <PaddingContainer className="relative">
                    <MaxContainer>
                        <div className="grid items-center gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:py-24">
                            {/* Copy */}
                            <div className="relative z-10 max-w-xl text-center lg:text-left">
                                <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-iris-400">Elevate your</span>
                                    <span className="block text-primary">tech future.</span>
                                </h1>
                                <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground sm:text-base lg:mx-0">
                                    Technology with Purpose. Innovation with Impact.
                                </p>
                                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                    <Button className="h-auto w-full rounded-full px-8 py-4 text-xs font-bold tracking-[0.15em] sm:w-auto">
                                        EXPLORE PROGRAMMES
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-auto w-full rounded-full border-iris-500 bg-transparent px-8 py-4 text-xs font-bold tracking-[0.15em] text-foreground hover:bg-iris-500/10 sm:w-auto"
                                    >
                                        OUR VISION
                                    </Button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative z-10">
                                <ImageIllustration />
                            </div>
                        </div>
                    </MaxContainer>
                </PaddingContainer>
            </div>

            {/* ---------- A Journey of Transformation ---------- */}
            <PaddingContainer className="pb-16 md:pb-24">
                <MaxContainer className="space-y-10 md:space-y-12">
                    <h2 className="text-center text-3xl font-bold md:text-4xl">
                        A Journey of Transformation
                    </h2>
                    <div className="mx-auto grid max-w-297.5 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {journeySteps.map((step) => (
                            <article
                                key={step.name}
                                className="flex flex-col items-center rounded-2xl border border-iris-800/30 bg-ink-850/60 p-8 text-center backdrop-blur-xl"
                            >
                                <span
                                    className={cn(
                                        "grid size-14 place-items-center rounded-full border",
                                        step.accent
                                            ? "border-primary text-primary"
                                            : "border-iris-500 text-iris-400"
                                    )}
                                >
                                    <step.icon className="size-6" />
                                </span>
                                <h3
                                    className={cn(
                                        "mt-5 text-xl font-bold",
                                        step.accent ? "text-primary" : "text-foreground"
                                    )}
                                >
                                    {step.name}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default HeroSection

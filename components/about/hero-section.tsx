import Link from "next/link"
import { cn } from "cn"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"

const AboutHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative brand shapes */}
            <div className="pointer-events-none absolute -left-20 top-1/2 hidden size-64 -translate-y-1/2 rounded-[72px] bg-iris-500/15 blur-2xl md:block" />
            <div className="pointer-events-none absolute -right-24 top-10 hidden size-72 rounded-[72px] bg-iris-400/10 blur-2xl md:block" />

            <PaddingContainer className="relative py-20 md:py-28 lg:py-32">
                <MaxContainer className="flex flex-col items-center text-center">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                        About <span className="text-primary">TVI</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        The Tech-Spark Visionary Initiative is a premium, faith-rooted technology
                        initiative bridging the gap between purpose, education, and innovation —
                        building the next generation of tech leaders.
                    </p>
                    <Link
                        href="/get-involved"
                        className={cn(
                            buttonVariants(),
                            "mt-8 h-auto rounded-full px-8 py-4 text-xs font-bold tracking-[0.15em]"
                        )}
                    >
                        SUPPORT US
                    </Link>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AboutHeroSection

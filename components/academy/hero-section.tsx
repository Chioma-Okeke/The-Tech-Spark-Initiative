import Link from "next/link"
import { cn } from "cn"
import { ArrowRight } from "@/icons"
import { LogoSVG } from "../shared/logo-svg"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"
import Image from "next/image"

const AcademyHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <svg
                aria-hidden
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/40 lg:block"
            >
                <line x1="78%" y1="-8%" x2="112%" y2="44%" stroke="currentColor" strokeWidth="1" />
                <line x1="88%" y1="60%" x2="116%" y2="108%" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* corner blobs */}
            <div className="pointer-events-none absolute bottom-10 left-10 hidden sm:block">
                <div className="size-32 rounded-[50px] bg-iris-500/15" />
                <div className="absolute left-16 top-8 size-24 rounded-[50px] bg-gold-500/15" />
            </div>

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="max-w-277">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
                        {/* Copy */}
                        <div className="relative z-10 max-w-168.75 text-center lg:text-left">
                            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="text-primary">Enter the </span>
                                <span className="text-iris-400">Academy.</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                                Your journey from learner to technology builder starts here. Immerse
                                yourself in a futuristic learning ecosystem designed to forge the next
                                generation of visionary architects.
                            </p>
                            <Link
                                href="#featured-courses"
                                className={cn(
                                    buttonVariants(),
                                    "mt-8 h-auto gap-2 rounded-xl px-7 py-4 text-sm font-bold"
                                )}
                            >
                                Explore Courses
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        {/* Image (placeholder — swap for the real illustration later) */}
                        <div className="relative z-10 overflow-hidden w-full max-w-95.5 h-full max-h-69.25">
                            <Image src="/academy-hero-image.png" fill className="object-center object-cover" alt="Illustration"/>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AcademyHeroSection

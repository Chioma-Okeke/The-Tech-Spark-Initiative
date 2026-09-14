import Link from "next/link"
import { cn } from "cn"
import { ArrowRight } from "@/icons"
import { LogoSVG } from "../shared/logo-svg"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"
import Image from "next/image"

const InnovationHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <svg
                aria-hidden
                preserveAspectRatio="none"
                className="pointer-events-none absolute bottom-0 hidden h-full w-full text-aqua-400/40 lg:block"
            >
                <line x1="88%" y1="90%" x2="180%" y2="0%" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* corner blobs */}
            <div className="pointer-events-none absolute bottom-10 left-10 hidden sm:block">
                <div className="size-full max-w-25 max-h-25 rounded-[50px] bg-iris-500/20" />
                <div className="absolute left-16 top-8 size-full max-w-20 max-h-20 rounded-[50px] bg-gold-500/30" />
            </div>

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="max-w-277">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
                        {/* Copy */}
                        <div className="relative z-10 max-w-168.75 text-center lg:text-left">
                            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="text-primary">IDEAS INTO </span>
                                <span className="text-iris-400">IMPACT.</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                                Explore our innovation case files. Witness the collision of visionary
                                concepts and high-end digital execution, powered by AI and modern tech
                                stacks. Learn how to apply it.
                            </p>
                            <Link
                                href="#featured-courses"
                                className={cn(
                                    buttonVariants(),
                                    "mt-8 h-auto gap-2 rounded-xl px-7 py-4 text-sm font-bold"
                                )}
                            >
                                Explore Projects
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        {/* Image (placeholder — swap for the real illustration later) */}
                        <div className="relative z-10 overflow-hidden w-full max-w-95.5 h-full max-h-69.25">
                            <Image src="/innovation-hero-image.png" fill className="object-center object-cover" alt="Illustration" />
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default InnovationHeroSection

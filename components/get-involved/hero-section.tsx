import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const teamFigures = [
    { x: 70, tone: "text-iris-400" },
    { x: 160, tone: "text-grey-300" },
    { x: 250, tone: "text-iris-500" },
] as const

const TeamIllustration = () => {
    return (
        <svg
            aria-hidden
            viewBox="0 0 380 210"
            className="mx-auto h-auto w-full max-w-md"
        >
            {teamFigures.map((figure) => (
                <g key={figure.x}>
                    <circle cx={figure.x + 32} cy={55} r="20" className="fill-ink-950" />
                    <rect
                        x={figure.x}
                        y={80}
                        width="64"
                        height="70"
                        rx="24"
                        className={figure.tone}
                        fill="currentColor"
                    />
                    <rect
                        x={figure.x + 8}
                        y={118}
                        width="48"
                        height="34"
                        rx="4"
                        className="fill-ink-950"
                    />
                </g>
            ))}
            <rect x="20" y="168" width="340" height="14" rx="7" className="fill-paper" />
            <rect x="130" y="192" width="120" height="5" rx="2.5" className="fill-paper/70" />
            <rect x="165" y="205" width="50" height="5" rx="2.5" className="fill-paper/50" />
        </svg>
    )
}

const GetInvolvedHeroSection = () => {
    return (
        <section className="dark relative overflow-hidden bg-ink-900 text-foreground">
            {/* decorative diagonal lines */}
            <svg
                aria-hidden
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/40 lg:block"
            >
                <line x1="0%" y1="46%" x2="24%" y2="-10%" stroke="currentColor" strokeWidth="1" />
                <line x1="76%" y1="-6%" x2="100%" y2="24%" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* corner blobs */}
            <div className="pointer-events-none absolute left-10 top-1/3 hidden size-28 rounded-[44px] bg-iris-500/20 sm:block" />
            <div className="pointer-events-none absolute right-16 top-1/2 hidden size-20 -translate-y-1/2 rounded-full bg-gold-500/20 sm:block" />

            <PaddingContainer className="relative py-16 md:py-24 lg:py-28">
                <MaxContainer className="flex flex-col items-center text-center">
                    <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="text-primary">Shape the future</span>
                        <br />
                        <span className="text-foreground">of </span>
                        <span className="text-iris-400">technology</span>
                        <br />
                        <span className="text-foreground">with us</span>
                    </h1>

                    <div className="mt-10 w-full max-w-lg">
                        <TeamIllustration />
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default GetInvolvedHeroSection

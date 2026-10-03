import { cn } from "cn"
import { Check } from "lucide-react"
import { commitmentPaths } from "@/lib/data"
import type { CommitmentPath } from "@/types"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const toneStyles: Record<CommitmentPath["tone"], { badge: string; check: string }> = {
    iris: { badge: "bg-iris-800 text-white", check: "text-iris-600" },
    gold: { badge: "bg-gold-500 text-ink-950", check: "text-gold-600" },
}

const PathCard = ({ path }: { path: CommitmentPath }) => {
    const tone = toneStyles[path.tone]

    return (
        <article className="group h-full rounded-3xl border border-[#E2E8F0]/80 bg-[#F8FAFC] p-6 transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-8">
            <span
                className={cn(
                    "grid size-11 place-items-center rounded-xl text-sm font-bold transition-[rotate,scale] duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105",
                    tone.badge
                )}
            >
                {path.index}
            </span>
            <h3 className="mt-5 text-xl lg:text-2xl font-bold text-foreground">{path.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {path.description}
            </p>
            <ul className="mt-5 space-y-2">
                {path.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className={cn("mt-0.5 size-4 shrink-0", tone.check)} />
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    )
}

const CommitmentSection = () => {
    return (
        <section className="bg-paper">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-10">
                    <AnimatedSection className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iris-600">
                            Flexibility &amp; Stewardship
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                            Two Ways to Fulfill Your Commitment
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            We value your time, circumstances, and skills. Sparks may fulfill
                            their additional scholarship commitment through active service
                            projects, or through voluntary charitable support.
                        </p>
                    </AnimatedSection>

                    <div className="mx-auto grid  gap-6 sm:grid-cols-2">
                        {commitmentPaths.map((path, i) => (
                            <AnimatedSection key={path.index} delay={0.1 + i * 0.15}>
                                <PathCard path={path} />
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="mx-auto max-w-5xl rounded-2xl border border-gold-500/40 bg-gold-100 px-6 py-5 text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#78350F]">
                            Please note: charitable contributions are entirely voluntary. They
                            are not tuition fees or payment for training.
                            <br className="hidden sm:block" />
                            TVI scholarships remain an educational access model built to
                            guarantee equity for every deserving mind.
                        </p>
                    </AnimatedSection>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default CommitmentSection

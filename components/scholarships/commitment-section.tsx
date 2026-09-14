import { cn } from "cn"
import { Check } from "lucide-react"
import { commitmentPaths } from "@/lib/data"
import type { CommitmentPath } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const toneStyles: Record<CommitmentPath["tone"], { badge: string; check: string }> = {
    iris: { badge: "bg-iris-800 text-white", check: "text-iris-600" },
    gold: { badge: "bg-gold-500 text-ink-950", check: "text-gold-600" },
}

const PathCard = ({ path }: { path: CommitmentPath }) => {
    const tone = toneStyles[path.tone]

    return (
        <article className="rounded-3xl border border-border bg-grey-100 p-6 sm:p-8">
            <span
                className={cn(
                    "grid size-11 place-items-center rounded-xl text-sm font-bold",
                    tone.badge
                )}
            >
                {path.index}
            </span>
            <h3 className="mt-5 text-xl font-bold text-foreground">{path.title}</h3>
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
        <section className="bg-grey-100">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-10">
                    <div className="mx-auto max-w-2xl text-center">
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
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                        {commitmentPaths.map((path) => (
                            <PathCard key={path.index} path={path} />
                        ))}
                    </div>

                    <div className="mx-auto max-w-4xl rounded-2xl border border-gold-500/40 bg-gold-100 px-6 py-5 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-gold-600 sm:text-sm">
                            Please note: charitable contributions are entirely voluntary. They
                            are not tuition fees or payment for training.
                            <br className="hidden sm:block" />
                            TVI scholarships remain an educational access model built to
                            guarantee equity for every deserving mind.
                        </p>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default CommitmentSection

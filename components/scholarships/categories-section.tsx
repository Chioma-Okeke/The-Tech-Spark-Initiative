import { cn } from "cn"
import { ChevronDown } from "lucide-react"
import { impactCategories } from "@/lib/data"
import type { ImpactCategory } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const toneStyles: Record<ImpactCategory["tone"], { badge: string; tagline: string }> = {
    iris: { badge: "bg-iris-100 text-iris-700", tagline: "text-iris-600" },
    gold: { badge: "bg-gold-100 text-gold-600", tagline: "text-gold-600" },
}

const CategoryCard = ({ category }: { category: ImpactCategory }) => {
    const tone = toneStyles[category.tone]

    return (
        <article className="flex flex-col rounded-2xl border border-border bg-paper p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3">
                <span
                    className={cn(
                        "rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest",
                        tone.badge
                    )}
                >
                    {category.badge}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{category.order}</span>
            </div>

            <h3 className="mt-4 text-lg font-extrabold text-foreground">{category.name}</h3>
            <p className={cn("mt-1 text-xs font-bold uppercase tracking-widest", tone.tagline)}>
                &ldquo;{category.tagline}&rdquo;
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {category.description}
            </p>

            <hr className="my-5 border-border" />

            <a
                href={category.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-iris-700"
            >
                View Approved Projects
                <ChevronDown className="size-4" />
            </a>
        </article>
    )
}

const CategoriesSection = () => {
    return (
        <section className="bg-grey-100">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iris-600">
                            Impact Disciplines
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                            Choose Your Impact Track
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Six categories, one goal: turn what you&apos;re learning into
                            something that serves the next Spark. Pick the track that fits your
                            skills.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {impactCategories.map((category) => (
                            <CategoryCard key={category.badge} category={category} />
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default CategoriesSection

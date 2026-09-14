import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"
import { ArrowRight } from "@/icons"
import { sparkProjects } from "@/lib/data"
import type { SparkProject } from "@/types"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"

const toneStyles: Record<SparkProject["tone"], { badge: string; tile: string }> = {
    iris: { badge: "bg-iris-100 text-iris-700", tile: "bg-iris-100 text-iris-600" },
    gold: { badge: "bg-gold-100 text-gold-600", tile: "bg-gold-100 text-gold-600" },
    neutral: { badge: "bg-grey-200 text-ink-muted", tile: "bg-grey-100 text-muted-foreground" },
}

const ProjectCard = ({ project }: { project: SparkProject }) => {
    const tone = toneStyles[project.tone]
    const Icon = project.icon

    return (
        <article className="flex flex-col overflow-hidden rounded-3xl bg-paper">
            <div className="relative h-40 shrink-0 overflow-hidden bg-grey-100 sm:h-44">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className={cn("flex h-full items-center justify-center", tone.tile)}>
                        <Icon className="size-10" />
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                    <span
                        className={cn(
                            "shrink-0 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold",
                            tone.badge
                        )}
                    >
                        {project.category}
                    </span>
                </div>

                {project.developedBy && (
                    <p className="mt-1 text-xs text-muted-foreground">
                        Developed by: {project.developedBy}
                    </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                </p>

                <Link
                    href={project.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-foreground"
                >
                    Explore Workflow
                    <ArrowRight className="size-4" />
                </Link>
            </div>
        </article>
    )
}

const SparksProjectsSection = () => {
    return (
        <section className="relative overflow-hidden bg-ink-950">
            {/* decorative diagonal line + corner glyph */}
            <svg
                aria-hidden
                className="pointer-events-none absolute right-[8%] top-8 hidden h-24 w-24 text-aqua-400/40 lg:block"
            >
                <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg
                aria-hidden
                viewBox="0 0 40 32"
                className="pointer-events-none absolute left-[6%] top-6 hidden size-8 text-secondary lg:block"
            >
                <path d="M2 2 L38 2 L2 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <PaddingContainer className="relative py-16 md:py-24">
                <MaxContainer className="space-y-10">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Sparks projects
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        {sparkProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}

                        <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-ink-900 p-8 sm:p-10">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -bottom-16 -right-16 size-56 rounded-full bg-gold-500/15 blur-3xl"
                            />
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                    Make Your Skills Work Harder.
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                                    The future belongs to those who can adapt. We teach you not
                                    just how to use AI, but how to think alongside it, critically
                                    evaluating outputs and integrating it seamlessly into your
                                    professional toolkit.
                                </p>
                                <Link
                                    href="/academy"
                                    className={cn(
                                        buttonVariants(),
                                        "mt-6 h-auto w-fit rounded-lg px-6 py-3 text-sm font-bold"
                                    )}
                                >
                                    Join our next AI Cohort
                                </Link>
                            </div>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default SparksProjectsSection

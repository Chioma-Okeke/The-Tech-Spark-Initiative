import Link from "next/link"
import { cn } from "cn"
import { sparkProjects } from "@/lib/data"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { buttonVariants } from "../ui/button"
import ProjectCard from "./project-card"

const SparksProjectsSection = () => {
    return (
        <section id="projects" className="relative overflow-hidden bg-ink-950">
            <svg
                aria-hidden
                className="pointer-events-none absolute right-[8%] top-8 hidden h-24 w-24 text-aqua-400/60 lg:block"
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
                    <AnimatedSection>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Sparks projects
                        </h2>
                    </AnimatedSection>

                    <div className="grid gap-6 md:grid-cols-3">
                        {sparkProjects.map((project, i) => (
                            <AnimatedSection key={project.title} delay={0.1 + (i % 2) * 0.15} className={cn({
                                "md:col-span-2": i == 0
                            })}>
                                <ProjectCard project={project} />
                            </AnimatedSection>
                        ))}

                        <AnimatedSection className="md:col-span-2" delay={0.1 + (sparkProjects.length % 2) * 0.15}>
                            <div className="group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-[#071B44] p-8 sm:p-10">
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -bottom-16 -right-16 size-56 rounded-full bg-gold-500/15 blur-3xl transition-[scale,opacity] duration-700 ease-out group-hover:scale-125 group-hover:opacity-80"
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
                                        Join our next AI Gen
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default SparksProjectsSection

import Image from "next/image"
import { ArrowRight } from "@/icons"
import { SparkProject } from "@/types";
import { cn } from "cn";
import Link from "next/link";

const toneStyles: Record<SparkProject["tone"], { badge: string; tile: string }> = {
    iris: { badge: "bg-[#452469]/10 text-iris-800", tile: "bg-iris-100 text-iris-600" },
    gold: { badge: "bg-gold-500/10 text-gold-500", tile: "bg-[#20315A]/5 text-[#452469]/40" },
    neutral: { badge: "bg-[#20315A]/10 text-ink-muted", tile: "bg-[#20315A]/5 text-[#20315A]" },
}

const ProjectCard = ({ project }: { project: SparkProject }) => {
    const tone = toneStyles[project.tone]
    const Icon = project.icon

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-paper transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
            <div className="relative h-64 shrink-0 overflow-hidden bg-[#20315A]/5">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className={cn("flex h-full items-center justify-center", tone.tile)}>
                        <Icon className="size-14 transition-[scale] duration-700 ease-out group-hover:scale-110" />
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
                    <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    )
}

export default ProjectCard

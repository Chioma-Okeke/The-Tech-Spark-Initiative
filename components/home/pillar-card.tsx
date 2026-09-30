import { InnovationPillar } from "@/types"
import { cn } from "cn"

const PillarCard = ({ pillar }: { pillar: InnovationPillar }) => {
    const Icon = pillar.icon

    return (
        <article
            className={cn(
                "flex h-full flex-col rounded-2xl border p-6 backdrop-blur-xl md:p-8 transition-[translate,border-color] duration-300 ease-out hover:-translate-y-1",
                pillar.highlight
                    ? "border-gold-500/40 bg-iris-950 hover:border-gold-500/70"
                    : "border-iris-800/30 bg-ink-850/60 hover:border-iris-500/50"
            )}
        >
            <span
                className={cn(
                    "grid size-11 lg:size-14 place-items-center rounded-xl",
                    pillar.highlight ? "bg-[#FFB300]/20 text-[#FFB300]" : "bg-[#6200EE]/20 border-[#6200EE]/40 text-[#E0E0FF]"
                )}
            >
                <Icon className="size-5 lg:size-6" />
            </span>
            <h3
                className={cn(
                    "mt-6 text-xl font-bold",
                    pillar.highlight ? "text-gold-400" : "text-foreground"
                )}
            >
                {pillar.name}
            </h3>
            <p className="mt-3 flex-1 max-lg:text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
            </p>
            <hr className="mt-6 border-white/10" />
            <span
                className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
            >
                {pillar.caption}
            </span>
        </article>
    )
}

export default PillarCard
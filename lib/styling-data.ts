import { CoreValue, SparkGlossaryEntry } from "@/types";

export const toneStyles: Record<
    CoreValue["tone"],
    { card: string; chip: string; icon: string }
> = {
    neutral: {
        card: "bg-gold-100/20",
        chip: "bg-grey-100 text-foreground",
        icon: "text-foreground",
    },
    greige: {
        card: "bg-[#F4F0EA] border-[#E0E3E5] border lg:py-20 h-auto",
        chip: "bg-white/70 text-foreground",
        icon: "text-foreground",
    },
    iris: {
        card: "bg-[#F2E7FD]",
        chip: "bg-iris-600/10 text-iris-600",
        icon: "text-iris-600",
    },
    gold: {
        card: "bg-gold-100",
        chip: "bg-white/70 text-gold-600",
        icon: "text-gold-600",
    },
}

export const cardBase =
    "rounded-3xl p-6 md:p-8 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
export const titleClass = "text-xl lg:text-3xl font-bold text-foreground"
export const descClass = "max-lg:text-sm leading-relaxed text-muted-foreground"

// descending from the top, then ascending from the bottom left
export const heroSectionLines = [
    { x1: 612, y1: 0, x2: 870, y2: 650 },
    { x1: 668, y1: 0, x2: 812, y2: 360 },
    { x1: 63, y1: 732, x2: 910, y2: 89 },
    { x1: 693, y1: 235, x2: 910, y2: 68 },
]

export const toneStylesAcademyPage: Record<
    SparkGlossaryEntry["tone"],
    { glow: string; iconWrap: string; subtitle: string; badge: string }
> = {
    gold: {
        glow: "bg-gold-500/20",
        iconWrap:
    "bg-iris-950 text-iris-300 shadow-[-2px_-2px_18px_0_color-mix(in_oklab,var(--color-iris-500)_50%,transparent),6px_6px_18px_0_color-mix(in_oklab,var(--color-gold-500)_50%,transparent)]",
        subtitle: "text-gold-600",
        badge: "border-gold-500/30 text-gold-600 bg-gold-500/10",
    },
    iris: {
        glow: "bg-iris-500/20",
        // box-shadow follows the tile's rounded-2xl corners; centred with a small spread = soft glow
        iconWrap: "bg-iris-950 text-iris-300 shadow-[0_0_18px_2px_color-mix(in_oklab,var(--color-iris-500)_45%,transparent)]",
        subtitle: "text-iris-600",
        badge: "border-iris-500/40 text-iris-600 bg-iris-500/10",
    },
}

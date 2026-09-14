import { ComponentType, SVGProps } from "react"

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type JourneyStep = {
    name: string
    description: string
    icon: IconComponent
    accent?: boolean
}

export type CoreValue = {
    name: string
    description: string
    icon: IconComponent
    /** card surface + icon colour treatment */
    tone: "neutral" | "greige" | "iris" | "gold"
    /** how the card lays out its icon / text */
    layout: "feature" | "inline" | "corner" | "banner"
    /** grid placement utilities for the bento layout */
    gridClass?: string
}

export type MethodologyStep = {
    name: string
    caption: string
    icon: IconComponent
    /** icon-circle treatment */
    tone: "neutral" | "iris" | "gold" | "gold-outline"
}

export type EvaluationCriterion = {
    /** e.g. "60%" */
    weight: string
    label: string
    /** small pill above the weight, e.g. "Primary Weight" */
    badge: string
    description: string
    tags: string[]
    tone: "iris" | "gold"
    icon: IconComponent
}

export type Course = {
    title: string
    description: string
    /** e.g. "12 Weeks" */
    duration: string
    /** renders larger + shows the "View Details" affordance */
    featured?: boolean
}

export type SparkGlossaryEntry = {
    /** e.g. "SPARK" */
    term: string
    /** e.g. "Individual Learner" */
    subtitle: string
    /** right-hand side of "FORMULA: …" */
    formula: string
    /** corner pill, e.g. "Who is a Spark?" */
    badge: string
    description: string
    icon: IconComponent
    tone: "gold" | "iris"
}

export type InvolvementOption = {
    name: string
    description: string
    icon: IconComponent
    ctaLabel: string
    href: string
    /** "photo" = image-backed feature card, "accent" = solid tinted card with outline button, "plain" = dark card with a small text link */
    layout: "photo" | "accent" | "plain"
    /** grid placement utilities for the bento layout */
    gridClass?: string
}

export type ScholarshipStat = {
    /** e.g. "20%" */
    value: string
    label: string
}

export type ScholarshipTier = {
    /** e.g. "20%" */
    percent: string
    name: string
    description: string
    /** dark, gold-ringed treatment for the top tier */
    highlight?: boolean
}

export type BaselineOption = {
    /** e.g. "OPTION A" or "MANDATORY FOR ALL" */
    eyebrow: string
    title: string
    description: string
    checklist: string[]
    icon: IconComponent
    /** dark, gold-badge treatment for the mandatory capstone */
    highlight?: boolean
}

export type CommitmentPath = {
    /** e.g. "01" */
    index: string
    title: string
    description: string
    checklist: string[]
    tone: "iris" | "gold"
}

export type ImpactCategory = {
    /** e.g. "Category A" */
    badge: string
    /** e.g. "01 / TEACH" */
    order: string
    name: string
    tagline: string
    description: string
    tone: "iris" | "gold"
    href: string
}

export type MultiplierStep = {
    /** e.g. "01" */
    index: string
    label: string
    highlight?: boolean
}

export type SparkProject = {
    title: string
    description: string
    /** corner pill, e.g. "Learning Support" */
    category: string
    tone: "iris" | "gold" | "neutral"
    /** e.g. "Developed by: Cohort 4 Students" — omit to hide */
    developedBy?: string
    /** real project photo; falls back to an icon tile when omitted */
    image?: string
    icon: IconComponent
    href: string
}

import { Briefcase, Share2, User } from "lucide-react"
import { Award, BookIcon, CircleCheck, Clock, CodeBlock, Crown, Globe, Lightbulb, Network, Puzzle, Rocket, Search, Target, Terminal, Users, Wrench, Zap } from "@/icons"
import { BaselineOption, CommitmentPath, CoreValue, Course, EvaluationCriterion, ImpactCategory, InvolvementOption, JourneyStep, MethodologyStep, MultiplierStep, ScholarshipStat, ScholarshipTier, SparkGlossaryEntry, SparkProject } from "@/types"

export const pages = [
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Academy",
        link: "/academy"
    },
    {
        name: "Innovation",
        link: "/innovation"
    },
    {
        name: "Impact",
        link: "/impact"
    },
    {
        name: "Stories",
        link: "/stories"
    },
    {
        name: "Learn",
        link: "/learn"
    },
    {
        name: "Volunteer",
        link: "/volunteer"
    },
    {
        name: "Mentor",
        link: "/mentor"
    },
    {
        name: "Partner",
        link: "/partner"
    },
    {
        name: "Support",
        link: "/support"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]

export const navItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Academy",
        link: "/academy"
    },
    {
        name: "Innovation",
        link: "/innovation"
    },
    {
        name: "Get Involved",
        link: "/get-involved"
    },
    {
        name: "Scholarships",
        link: "/scholarships"
    }
]



export const journeySteps: JourneyStep[] = [
    {
        name: "Learn",
        description: "Master foundational skills through rigorous, industry-aligned curricula.",
        icon: BookIcon
    },
    {
        name: "Build",
        description: "Apply knowledge to create functional, real-world digital products.",
        icon: CodeBlock
    },
    {
        name: "Solve",
        description: "Tackle complex problems using design thinking and innovative logic.",
        icon: Puzzle
    },
    {
        name: "Impact",
        description: "Deploy solutions that drive meaningful change in communities.",
        icon: Rocket,
        accent: true
    }
]

export const coreValues: CoreValue[] = [
    {
        name: "Kingdom",
        description:
            "Leading with purpose, integrity, and a commitment to serving the greater good above all else.",
        icon: Crown,
        tone: "neutral",
        layout: "feature",
        gridClass: "md:row-span-2"
    },
    {
        name: "Innovation",
        description:
            "Relentlessly pushing boundaries to create elegant, high-tech solutions for tomorrow's challenges.",
        icon: Lightbulb,
        tone: "iris",
        layout: "inline",
        gridClass: "md:col-span-2"
    },
    {
        name: "Excellence",
        description:
            "Demand uncompromising quality in every line of code, design, and interaction.",
        icon: Award,
        tone: "gold",
        layout: "corner"
    },
    {
        name: "Impact",
        description:
            "Measuring our success by the tangible, positive transformation we bring to communities.",
        icon: Globe,
        tone: "iris",
        layout: "corner"
    },
    {
        name: "Inclusivity",
        description:
            "Building tables where everyone has a seat. We believe true futurism is diverse, equitable, and accessible to all voices.",
        icon: Users,
        tone: "greige",
        layout: "banner",
        gridClass: "md:col-span-3"
    }
]

export const missionAndVision = [
    {
        icon: Target,
        name: "Mission",
        content: "To provide structured, value-driven tech education and innovation programs that build skilled talent, encourage research and practical problem-solving, and extend compassionate support to vulnerable people as part of our faith-based commitment."
    },
    {
        icon: Target,
        name: "Vision",
        content: "To provide structured, value-driven tech education and innovation programs that build skilled talent, encourage research and practical problem-solving, and extend compassionate support to vulnerable people as part of our faith-based commitment."
    },
]

export const methodologySteps: MethodologyStep[] = [
    { name: "Discover", caption: "Identify the problem", icon: Search, tone: "neutral" },
    { name: "Learn", caption: "Acquire the tools", icon: BookIcon, tone: "iris" },
    { name: "Build", caption: "Execute solutions", icon: Wrench, tone: "gold" },
    { name: "Impact", caption: "Create change", icon: Globe, tone: "gold-outline" },
]

export const evaluationCriteria: EvaluationCriterion[] = [
    {
        weight: "60%",
        label: "Academic Performance",
        badge: "Primary Weight",
        description: "Academic activities, quizzes, assignments and project progress.",
        tags: ["Project Sprints", "Technical Quizzes", "Production Code"],
        tone: "gold",
        icon: Terminal,
    },
    {
        weight: "40%",
        label: "Character & Participation",
        badge: "Holistic Metric",
        description:
            "Leadership, teamwork, communication, consistency, initiative and other character indicators.",
        tags: ["Peer Leadership", "Initiative", "Consistency"],
        tone: "iris",
        icon: Users,
    },
]

export const featuredCourses: Course[] = [
    {
        title: "AI & Machine Learning Foundations",
        description:
            "Build scalable AI models using modern frameworks. Designed for software engineers transitioning into data science.",
        duration: "12 Weeks",
        featured: true,
    },
    {
        title: "Ethical Hacking",
        description: "Secure enterprise networks and uncover vulnerabilities.",
        duration: "8 Weeks",
    },
    {
        title: "UI/UX Systems Design",
        description: "Create intuitive, accessible digital experiences.",
        duration: "6 Weeks",
    },
]

export const involvementOptions: InvolvementOption[] = [
    {
        name: "Learn",
        description:
            "Immerse yourself in our rigorous tech curriculum. Master the skills required to architect tomorrow's digital infrastructure.",
        icon: BookIcon,
        ctaLabel: "Apply to Academy",
        href: "/academy",
        layout: "photo",
        gridClass: "md:col-span-2",
    },
    {
        name: "Volunteer",
        description:
            "Deploy your time and energy on the ground. Drive community tech initiatives and facilitate local ecosystem growth.",
        icon: Network,
        ctaLabel: "Join the Core",
        href: "#",
        layout: "accent",
    },
    {
        name: "Mentor",
        description:
            "Transfer your expertise to the next generation of builders. Shape raw talent into visionary architects.",
        icon: Award,
        ctaLabel: "Become a Mentor",
        href: "#",
        layout: "plain",
    },
    {
        name: "Partner",
        description:
            "Align your organization with TVI. Co-create innovation hubs and scale systemic technological change across the continent.",
        icon: Puzzle,
        ctaLabel: "Propose Partnership",
        href: "#",
        layout: "plain",
    },
    {
        name: "Support",
        description:
            "Inject capital into the ecosystem. Fund scholarships, hardware, and infrastructure to accelerate the mission.",
        icon: Zap,
        ctaLabel: "Fund the Future",
        href: "#",
        layout: "plain",
    },
]

export const scholarshipStats: ScholarshipStat[] = [
    { value: "20%", label: "Universal Baseline" },
    { value: "5 Tiers", label: "Voluntary Pathways" },
    { value: "6 Tracks", label: "Impact Disciplines" },
]

export const scholarshipTiers: ScholarshipTier[] = [
    {
        percent: "20%",
        name: "Baseline",
        description: "Universal support for every accepted Spark",
    },
    {
        percent: "40%",
        name: "Growth",
        description: "1 approved impact project commitment",
    },
    {
        percent: "60%",
        name: "Expanded",
        description: "2 approved impact project commitments",
    },
    {
        percent: "80%",
        name: "Advanced",
        description: "3 approved impact project commitments",
    },
    {
        percent: "100%",
        name: "Full Visionary",
        description: "4 approved impact projects & maximum service",
        highlight: true,
    },
]

export const baselineOptions: BaselineOption[] = [
    {
        eyebrow: "OPTION A",
        title: "Project 1: Build Your Professional Presence",
        description:
            "Comprehensive LinkedIn profile optimization highlighting technical capabilities, combined with 1 substantive insight posts documenting your learning journey inside TVI.",
        checklist: ["Profile bio & skills portfolio revamp", "1 verified public reflective posts"],
        icon: User,
    },
    {
        eyebrow: "OPTION B",
        title: "Project 2: Share Your Learning",
        description:
            "Author and publish 1 educational technical insights across at least 2 public knowledge-sharing platforms (e.g., Substack, Medium, dev.to, or GitHub discussions).",
        checklist: ["2 external distribution platforms", "Concrete code snippets & technical breakdowns"],
        icon: Share2,
    },
    {
        eyebrow: "MANDATORY FOR ALL",
        title: "Project 3: Capstone Product",
        description:
            "Discipline-specific final build. Interactive dashboards, fully deployable web applications, AI models, or validated product architecture presented to industry evaluators.",
        checklist: ["Live deployed product demonstration", "Comprehensive codebase & technical defense"],
        icon: Briefcase,
        highlight: true,
    },
]

export const commitmentPaths: CommitmentPath[] = [
    {
        index: "01",
        title: "Path 1: Service + Impact",
        description:
            "Complete approved scholarship projects across the 6 categories using your emerging technical skills. You directly build assets, teach fellow community members, and elevate the next cohort.",
        checklist: [
            "Zero out-of-pocket payment required",
            "Real public portfolio additions",
            "Tangible leadership validation",
        ],
        tone: "iris",
    },
    {
        index: "02",
        title: "Path 2: Pay It Forward",
        description:
            "Working professionals or Sparks with limited extra bandwidth may make a voluntary charitable contribution directly to TVI's community outreach and equipment fund, exempting them from supplementary projects.",
        checklist: [
            "Fully sponsors materials for underprivileged Sparks",
            "Maximizes personal focus on core technical studies",
            "Complete tax-deductible educational donation",
        ],
        tone: "gold",
    },
]

export const impactCategories: ImpactCategory[] = [
    {
        badge: "Category A",
        order: "01 / TEACH",
        name: "TEACH: Peer Education",
        tagline: "Teach Someone Else",
        description:
            "Run study groups, host onboarding sessions for new Sparks, or create tutorial content that shortens the next cohort's learning curve.",
        tone: "gold",
        href: "#",
    },
    {
        badge: "Category B",
        order: "02 / DESIGN",
        name: "DESIGN: Product & UX",
        tagline: "Shape The Experience",
        description:
            "Contribute UI/UX improvements, design assets, and accessibility audits for TVI's own tools or a partner organization's product.",
        tone: "iris",
        href: "#",
    },
    {
        badge: "Category C",
        order: "03 / SERVE",
        name: "SERVE: Community Outreach",
        tagline: "Give Back Locally",
        description:
            "Volunteer at community tech-literacy drives, support onboarding for new Sparks, or run local outreach events on TVI's behalf.",
        tone: "gold",
        href: "#",
    },
    {
        badge: "Category D",
        order: "04 / BUILD",
        name: "BUILD: TVI Contribution",
        tagline: "Build Something That Lasts",
        description:
            "Improve the infrastructure future Sparks will use. Build automated Discord bots, documentation wikis, or starter template repos.",
        tone: "gold",
        href: "#",
    },
    {
        badge: "Category E",
        order: "05 / DISCOVER",
        name: "DISCOVER: Industry Research",
        tagline: "Investigate And Understand",
        description:
            "Conduct deep empirical research on the African tech landscape, cloud pricing comparisons, or local data privacy laws.",
        tone: "iris",
        href: "#",
    },
    {
        badge: "Category F",
        order: "06 / GROW",
        name: "GROW: Career Acceleration",
        tagline: "Prepare For The Next Stage",
        description:
            "Facilitate technical interview preparation pods, review junior CVs, or curate comprehensive job hunting guides for fellow Sparks.",
        tone: "gold",
        href: "#",
    },
]

export const multiplierSteps: MultiplierStep[] = [
    { index: "01", label: "TVI Supports You" },
    { index: "02", label: "You Master Tech" },
    { index: "03", label: "You Build Apps" },
    { index: "04", label: "You Serve Others" },
    { index: "05", label: "Peers Benefit" },
    { index: "06", label: "Ecosystem Grows", highlight: true },
]

export const sparkProjects: SparkProject[] = [
    {
        title: "Personalized Learning Companion",
        description:
            "A practical workflow using Large Language Models to convert complex lecture notes into customized study guides, flashcards, and practice quizzes tailored to individual learning speeds.",
        category: "Learning Support",
        tone: "iris",
        developedBy: "Cohort 4 Students",
        icon: Lightbulb,
        href: "#",
    },
    {
        title: "AI Interview Prep Bot",
        description:
            "A student-built application using voice AI to simulate job interviews for tech roles, providing real-time feedback on answers and tone.",
        category: "Career",
        tone: "gold",
        icon: Clock,
        href: "#",
    },
    {
        title: "Automated Research Assistant",
        description:
            "A system chaining multiple AI tools to summarize academic papers, extract key data points, and draft literature reviews for final year projects.",
        category: "Productivity",
        tone: "neutral",
        icon: CircleCheck,
        href: "#",
    },
]

export const sparkGlossary: SparkGlossaryEntry[] = [
    {
        term: "Spark",
        subtitle: "Individual Learner",
        formula: "Spark = Individual Learner",
        badge: "Who is a Spark?",
        description:
            "A Spark is a learner participating in the TVI Academy — developing practical skills, working on projects, collaborating with others and growing into a purpose-driven technology professional.",
        icon: Zap,
        tone: "gold",
    },
    {
        term: "Gen",
        subtitle: "Community of Sparks",
        formula: "Gen = Cohort",
        badge: "What's a Gen?",
        description:
            "A Gen is a cohort of Sparks going through the TVI Academy, building and growing together during their TVI journey.",
        icon: Network,
        tone: "iris",
    },
]

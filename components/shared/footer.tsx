import { pages } from "@/lib/data"
import MaxContainer from "./max-container"
import PaddingContainer from "./padding-container"
import Link from "next/link"
import { Share2 } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="dark bg-ink-950 text-muted-foreground">
            <PaddingContainer>
                <MaxContainer className="space-y-10 py-14">
                    <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-16">
                        <div className="max-w-xs space-y-4">
                            <p className="text-2xl font-extrabold tracking-tight text-iris-500">
                                TVI
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Architecting the digital foundation of
                                Africa. Precision, vision, and relentless
                                execution.
                            </p>
                        </div>
                        <nav
                            aria-label="Footer"
                            className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3 lg:grid-flow-col lg:grid-cols-4 lg:grid-rows-3"
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page.link}
                                    href={page.link}
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {page.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-primary">
                            © 2024 TVI. Architecting the Future.
                        </p>
                        <button
                            type="button"
                            aria-label="Share"
                            className="self-end text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
                        >
                            <Share2 className="size-4" />
                        </button>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </footer>
    )
}

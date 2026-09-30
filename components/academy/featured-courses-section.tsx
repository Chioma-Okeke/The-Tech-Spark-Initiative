import { cn } from "cn"
import { ArrowRight, Clock } from "@/icons"
import { featuredCourses } from "@/lib/data"
import { AnimatedSection } from "../shared/animated-section"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const FeaturedCoursesSection = () => {
    return (
        <section id="featured-courses" className="scroll-mt-20 bg-ink-900">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-8 md:space-y-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-primary sm:text-3xl">
                            Featured Courses
                        </h2>
                    </AnimatedSection>

                    <div className="grid gap-5 md:grid-cols-3">
                        {featuredCourses.map((course, i) => (
                            <AnimatedSection
                                key={course.title}
                                delay={0.1 + i * 0.1}
                                className={cn(course.featured && "md:col-span-2")}
                            >
                                <article className="group flex h-full flex-col rounded-2xl bg-paper p-6 text-foreground transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                                    <h3 className="text-lg font-bold">{course.title}</h3>
                                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                                        {course.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-8 text-sm">
                                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                                            <Clock className="size-4" />
                                            {course.duration}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 font-medium">
                                            {course.featured && "View Details"}
                                            <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </article>
                            </AnimatedSection>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default FeaturedCoursesSection

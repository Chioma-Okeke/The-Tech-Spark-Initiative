import { cn } from "cn"
import { ArrowRight, Clock } from "@/icons"
import { featuredCourses } from "@/lib/data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"

const FeaturedCoursesSection = () => {
    return (
        <section id="featured-courses" className="scroll-mt-20 bg-ink-950">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="space-y-8 md:space-y-10">
                    <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                        Featured Courses
                    </h2>

                    <div className="grid gap-5 md:grid-cols-3">
                        {featuredCourses.map((course) => (
                            <article
                                key={course.title}
                                className={cn(
                                    "flex flex-col rounded-2xl bg-paper p-6 text-foreground",
                                    course.featured && "md:col-span-2"
                                )}
                            >
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
                                        <ArrowRight className="size-4" />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default FeaturedCoursesSection

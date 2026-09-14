import { Lightbulb } from "@/icons"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { LogoSVG } from "../shared/logo-svg"

const OurStorySection = () => {
    return (
            <section className="bg-[#F2F4F6] text-foreground">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer>
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                        {/* Story copy */}
                        <div>
                            <h2 className="text-3xl font-bold md:text-4xl">Our Story</h2>
                            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                                <p>
                                    Founded on the principles of faith and excellence, TVI emerged
                                    from a vision to create a space where technical mastery meets
                                    profound purpose.
                                </p>
                                <p>
                                    We saw the need for a technology education that does not just
                                    teach code, but cultivates character and visionary thinking —
                                    equipping people to build what comes next.
                                </p>
                            </div>
                        </div>

                        {/* Emblem */}
                        <div className="w-60 mx-auto">
                            <LogoSVG className="w-full h-auto" />
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default OurStorySection

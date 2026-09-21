import { missionAndVision } from "@/lib/data"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { cn } from "cn"

const MissionAndVision = () => {
    return (
        <section className="relative overflow-hidden bg-[#101120] py-20 md:py-16 lg:py-28">
            <svg
                aria-hidden
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full text-aqua-400/90 md:block"
            >
                <line x1="80%" y1="0%" x2="100%" y2="22%" stroke="currentColor" strokeWidth="1" />
            </svg>
            <PaddingContainer>
                <MaxContainer className="relative flex w-full flex-col gap-8 max-w-290 lg:h-94.25 lg:flex-row lg:justify-between">
                    {missionAndVision.map((item, index) => {
                        return (
                            <div key={index} className={cn("w-full lg:max-w-140.5 lg:max-h-70.5 p-8 md:p-10 lg:p-12 bg-[#1D2022]/40 relative overflow-hidden rounded-3xl border border-[#B5C5F7]/10", {
                                "lg:self-end": item.name === "Vision"
                            })}>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-white/15 blur-3xl"
                                />
                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-3">
                                        <item.icon className={cn("size-6.5", {
                                            "text-[#FFBA46]": item.name === "Mission",
                                            "text-[#B5C5F7]": item.name === "Vision"
                                        })} />
                                        <h3 className="font-bold text-2xl sm:text-3xl text-[#E0E3E5]">{item.name}</h3>
                                    </div>
                                    <p className="text-base md:text-lg leading-relaxed text-[#C5C6D0]">{item.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MissionAndVision

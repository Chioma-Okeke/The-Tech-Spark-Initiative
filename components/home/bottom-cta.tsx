import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { Button } from "../ui/button"

const BottomCTA = () => {
    return (
        <section className="dark bg-ink-900 py-14 text-foreground md:py-20 lg:py-28">
            <PaddingContainer>
                <MaxContainer className="flex flex-col items-center gap-6 text-center md:gap-8">
                    <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] xl:leading-[1.1]">
                        YOUR FUTURE IS BUILT, NOT WATCHED.
                    </h1>
                    <p className="mx-auto max-w-xl text-base leading-relaxed text-iris-100 sm:text-lg">
                        Join the next cohort of visionaries. Applications are open for upcoming programmes.
                    </p>
                    <Button className="mt-2 h-auto w-full max-w-xs rounded-full px-10 py-5 shadow-[0_8px_30px_0_#FBBC0066] sm:w-auto">
                        APPLY NOW
                    </Button>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BottomCTA

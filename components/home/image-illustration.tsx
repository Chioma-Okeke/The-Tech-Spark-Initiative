import Image from "next/image"

const ImageIllustration = () => {
    return (
        <div className="relative mx-auto w-full max-w-105 sm:max-w-120 lg:mr-0 lg:ml-auto lg:max-w-140">
            {/* translucent brand panels behind the frame */}
            <div className="absolute -left-6 right-1 top-6 -bottom-6 w-full rounded-bl-[20px] rounded-tr-[44px] rounded-br-[44px] bg-iris-400/15 sm:-left-10 sm:top-8 sm:-bottom-8 lg:-left-18 lg:right-2 lg:top-12 lg:-bottom-10 lg:max-h-117.25 lg:max-w-143" />
            <div className="absolute -bottom-6 -left-6 size-32 rounded-[40px] bg-iris-400/20 sm:-bottom-10 sm:-left-16 sm:size-40 max-w-48 max-h-[180px] lg:-bottom-14 lg:-left-32" />
            <div className="absolute -bottom-8 -left-4 size-28 rounded-[40px] bg-gold-400/25 sm:-bottom-12 sm:-left-8 sm:size-36 max-h-[162px] lg:-bottom-18 lg:-left-12" />

            {/* framed image */}
            <div className="relative ml-auto z-10 overflow-hidden rounded-[11px] border border-white/10 shadow-2xl max-w-121">
                <Image
                    src="/futuristic-woman.png"
                    alt="A technologist interacting with a holographic city interface"
                    width={936}
                    height={1018}
                    priority
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 100vw"
                    className="h-auto w-full object-cover"
                />
            </div>
        </div>
    )
}

export default ImageIllustration

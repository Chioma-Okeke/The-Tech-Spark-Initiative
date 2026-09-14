import Image from "next/image"

const ImageIllustration = () => {
    return (
        <div className="relative mx-auto w-full max-w-105 sm:max-w-120 lg:mr-0 lg:ml-auto lg:max-w-140">
            {/* translucent brand panels behind the frame */}
            <div className="absolute -right-4 top-6 bottom-6 w-3/4 rounded-l-[44px] rounded-br-[44px] bg-iris-400/15" />
            <div className="absolute -bottom-6 -left-5 size-32 rounded-[40px] bg-iris-400/20 sm:size-40" />
            <div className="absolute -bottom-10 left-6 size-28 rounded-[40px] bg-gold-400/25 sm:size-36" />

            {/* framed image */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
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

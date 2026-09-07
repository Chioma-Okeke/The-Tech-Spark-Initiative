import { cn } from "cn"
import { ReactNode } from "react"

const PaddingContainer = ({ children, className }: {
    children: ReactNode,
    className: string
}) => {
    return (
        <div className={cn("px-5 md:px-10 xl:px-20", className)}>
            {children}
        </div>
    )
}

export default PaddingContainer

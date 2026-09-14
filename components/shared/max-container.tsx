import { cn } from "cn"
import { ReactNode } from "react"

const MaxContainer = ({ children, className }: {
    children: ReactNode,
    className?: string
}) => {
    return (
        <div className={cn("w-full max-w-360 mx-auto", className)}>
            {children}
        </div>
    )
}

export default MaxContainer

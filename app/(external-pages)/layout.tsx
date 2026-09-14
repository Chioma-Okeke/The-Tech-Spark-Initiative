import React from "react"
import NavBar from "@/components/shared/nav-bar";
import { Footer } from "@/components/shared/footer";
import BackToTop from "@/components/shared/back-to-top"

const ExternalPagesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen">
            <NavBar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default ExternalPagesLayout;
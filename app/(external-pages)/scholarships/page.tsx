import BaselineSection from "@/components/scholarships/baseline-section"
import CategoriesSection from "@/components/scholarships/categories-section"
import CommitmentSection from "@/components/scholarships/commitment-section"
import ScholarshipsHeroSection from "@/components/scholarships/hero-section"
import MultiplierSection from "@/components/scholarships/multiplier-section"
import PhilosophySection from "@/components/scholarships/philosophy-section"

const ScholarshipsPage = () => {
    return (
        <>
            <ScholarshipsHeroSection />
            <PhilosophySection />
            <BaselineSection />
            <CommitmentSection />
            <CategoriesSection />
            <MultiplierSection />
        </>
    )
}

export default ScholarshipsPage

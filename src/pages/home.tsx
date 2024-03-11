import { Background } from "../components/background"
import { Banner } from "../components/banner"
import { Navbar } from "../components/navbar"
import { Sections } from "../components/section"
import { SectionService } from "../components/section-service"

export const Home = () => {
    return <>
        <Navbar />
        <Background />
        <Banner />
        <Sections />
        <SectionService />
    </>
}
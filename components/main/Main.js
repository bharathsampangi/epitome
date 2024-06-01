import React from "react"
import Hero from "../hero/Hero"
import Location from "../location/Location"
import Navbar from "../navbar/Navbar"
import Who from "../who/Who"
import Preview from "../preview/Preview"
import Footer from "../footer/Footer"
import About from "../about/About"
import Enquire from "../enquire/Enquire"
import Project from "../project/Project"
import Amenities from "../Amenities/Amenities"
import Pricing from "../Pricing/Pricing"

const Main = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Amenities />
            <Pricing />
            <Location />
            <Who />
            <Preview />
            <Enquire />
            <Footer />
        </main>
    )
}

export default Main
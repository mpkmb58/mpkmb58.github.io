import React from 'react'
import { Fragment } from 'react'
import AboutComponent from '../../Components/AboutComponent/AboutComponent'
import Footer from '../../Components/Footer/Footer'
// import './About.css'

function About() {
    return (
        <Fragment>

            <section className="bg-blur p-5" >
                <AboutComponent />
            </section>
            <Footer />
        </Fragment>
    )
}

export default About

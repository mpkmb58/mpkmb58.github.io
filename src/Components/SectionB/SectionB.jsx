import React from 'react'
import { Fragment } from 'react'
import CardAbout from '../CardAbout/CardAbout'
import CardAgendaPenugasan from '../CardAgendaPenugasan/CardAgendaPenugasan'
import CardEvent from '../CardEvent/CardEvent'
import CardFAQ from '../CardFAQ/CardFAQ'
import CardSponsorship from '../CardSponsorship/CardSponsorship'
import Footer from '../Footer/Footer'
import './SectionB.css'

function SectionB() {
    return (
        <div>
            <section class="bg-grey panel b" >
                <div className="container">
                    <CardAbout/>
                    <div className="row">
                        <div className="col-md-6 py-0">
                            <CardEvent/>
                        </div>
                        <div className="col-md-6 py-0">
                            <CardFAQ/>
                        </div>
                    </div>
                    <CardAgendaPenugasan/>
                    <CardSponsorship/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default SectionB

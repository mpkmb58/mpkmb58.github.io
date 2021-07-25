import React from 'react'
import { Fragment } from 'react'
import CardAbout from '../CardAbout/CardAbout'
import CardAgendaPenugasan from '../CardAgendaPenugasan/CardAgendaPenugasan'
import CardEvent from '../CardEvent/CardEvent'
import CardFAQ from '../CardFAQ/CardFAQ'
import CardLiniMasa from '../CardLiniMasa/CardLiniMasa'
import CardSponsorship from '../CardSponsorship/CardSponsorship'
import Footer from '../Footer/Footer'
import './SectionB.css'

function SectionB() {
    return (
        <div>
            <section className="bg-grey panel b" >
                <div className="container">
                    <CardAbout/>
                    <CardLiniMasa/>
                    <div className="row">
                        <div className="col-md-6 py-0">
                            <a href="/Event MPKMB">
                                <CardEvent/>
                            </a>
                        </div>
                        <div className="col-md-6 py-0">
                            <CardFAQ/>
                        </div>
                    </div>
                    <a href="/Agenda dan Penugasan">
                        <CardAgendaPenugasan/>
                    </a>
                    <CardSponsorship/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default SectionB

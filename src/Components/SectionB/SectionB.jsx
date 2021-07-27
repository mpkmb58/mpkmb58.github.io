import React from 'react'
import { Fragment } from 'react'
import CardAbout from '../CardAbout/CardAbout'
import CardAgendaPenugasan from '../CardAgendaPenugasan/CardAgendaPenugasan'
import CardEvent from '../CardEvent/CardEvent'
import CardFAQ from '../CardFAQ/CardFAQ'
import CardLiniMasa from '../CardLiniMasa/CardLiniMasa'
import CardSponsorship from '../CardSponsorship/CardSponsorship'
// import ModalLiniMasa from '../ModalLiniMasa/ModalLiniMasa'
import Footer from '../Footer/Footer'
import './SectionB.css'

function SectionB() {
    return (
        <Fragment>
            <section className="bg-grey panel b bg-blur overflow-hidden py-4" >
                <div className="container position-relative section-b-wrapper">
                    <div className="card-batch mb-3 mb-lg-4 ">
                        <CardAbout />
                    </div>
                    <div className="card-batch my-3 my-lg-4">
                        <CardLiniMasa />
                    </div>
                    <div className="row my-3 my-lg-4">
                        <div className="col-md-6">
                            <a href="/Event MPKMB" className="card-batch">
                                <CardEvent />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="card-batch">
                                <CardFAQ />
                            </div>
                        </div>
                    </div>
                    <a href="/Agenda dan Penugasan" className="card-batch my-3 my-lg-4">
                        <CardAgendaPenugasan />
                    </a>
                    <div className="card-batch mt-3 mt-lg-4 ">
                        <CardSponsorship />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>

    )
}

export default SectionB

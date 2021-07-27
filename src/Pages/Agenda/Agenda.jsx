import React, { Fragment } from 'react'
import CardSmall from '../../Components/CardSmall/CardSmall'
import Footer from '../../Components/Footer/Footer'
import './Agenda.css'

function Agenda() {
    return (
        <Fragment>
            <section className="three-card-page">
                <div className="container">
                    <div className="row mt-3 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-blue" day="1" title="Opening Ceremony" />
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-blue" day="2" title="Faculty Tour" />
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-red" day="3" title="Creature" />
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-red" day="4" title="Young, Spirit, and Nationalism" />
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-orange" day="5" title="Closing Ceremony" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Agenda

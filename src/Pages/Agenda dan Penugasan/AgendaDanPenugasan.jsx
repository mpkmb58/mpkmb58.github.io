import React, { Fragment } from "react";
import CardPanduan from '../../Components/CardVertical/CardPanduan';
import CardAgenda from '../../Components/CardVertical/CardAgenda';
import CardPenugasan from '../../Components/CardVertical/CardPenugasan'
import Footer from '../../Components/Footer/Footer';
import './AgendaDanPenugasan.css'


function AgendaDanPenugasan() {
    return (
        <Fragment>
            <section className="three-card-page agenda-penugasan bg-blur">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-lg-4">
                            <a href="/Agenda">
                                <CardAgenda title="Agenda" />
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <CardPanduan title="Panduan" />
                        </div>
                        <div className="col-lg-4">
                            <CardPenugasan title="Penugasan" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default AgendaDanPenugasan;
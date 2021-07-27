import React, { Fragment } from 'react'
import CardGame from '../../Components/CardVertical/CardGame';
import Card360 from '../../Components/CardVertical/Card360';
import CardVirEx from '../../Components/CardVertical/CardVirEx';
import Footer from '../../Components/Footer/Footer';
import './Events.css';


function Events() {
    return (
        <Fragment>
            <section className="three-card-page bg-blur events d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <CardVirEx title="Virtual Exhibition" />
                        </div>
                        <div className="col-lg-4">
                            <Card360 title="360 Campus Tour" />
                        </div>
                        <div className="col-lg-4">
                            <CardGame title="Agriventure" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default Events;

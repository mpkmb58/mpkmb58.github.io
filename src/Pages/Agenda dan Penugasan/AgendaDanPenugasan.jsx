import React from "react";
import CardPanduan from '../../Components/CardVertical/CardPanduan';
import CardAgenda from '../../Components/CardVertical/CardAgenda';
import CardPenugasan from '../../Components/CardVertical/CardPenugasan'
import ButtonKembali from '../../Components/Button/ButtonKembali/ButtonKembali';
import Footer from '../../Components/Footer/Footer';
import './AgendaDanPenugasan.css'


function AgendaDanPenugasan() {
        return ( 
            <section>
            <div className="agenda-penugasan">
                <div className="container">
                    <a href="/">
                        <ButtonKembali/>
                    </a>
                    <div className="row mt-2">
                        <div className="col-lg-4">
                            <a href="/Agenda">
                                <CardAgenda title="Agenda"/>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <CardPanduan title="Panduan"/>
                        </div>
                        <div className="col-lg-4">
                            <CardPenugasan title="Penugasan"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </section>
         );
}

export default AgendaDanPenugasan;
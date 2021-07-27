import React, {Fragment}  from 'react'
import CardGame from '../../Components/CardVertical/CardGame';
import Card360 from '../../Components/CardVertical/Card360';
import CardVirEx from '../../Components/CardVertical/CardVirEx';
import ButtonKembali from '../../Components/Button/ButtonKembali/ButtonKembali';
import Footer from '../../Components/Footer/Footer';
import CardHover from '../../Components/CardVertical/CardHover';
import './Events.css';


function Events() {
        return ( 
            <Fragment>
            <section className="three-card-page events d-flex justify-content-center align-items-center">
                <div className="container">
                    <a href="/">
                        <ButtonKembali/>
                    </a>
                    <div className="row mt-2">
                        <div className="col-lg-4">
                            <CardVirEx title="Virtual Exhibition"/>
                        </div>
                        <div className="col-lg-4">
                            <Card360 title="360 Campus Tour"/>
                        </div>
                        <div className="col-lg-4">
                            <CardGame title="Agriventure"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </Fragment>
         );
}
 
export default Events;

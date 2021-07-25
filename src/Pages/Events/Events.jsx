import React  from 'react'
import CardGame from '../../Components/CardVertical/CardGame';
import Card360 from '../../Components/CardVertical/Card360';
import CardVirEx from '../../Components/CardVertical/CardVirEx';
import ButtonKembali from '../../Components/Button/ButtonKembali/ButtonKembali';
import Footer from '../../Components/Footer/Footer';
import './Events.css'



function Events() {
        return ( 
            <div>
            <div className="events d-flex justify-content-center align-items-center">
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
            </div>
            <Footer/>
            </div>
         );
}
 
export default Events;

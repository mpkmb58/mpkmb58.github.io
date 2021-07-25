import React from 'react'
import CardSmall from '../../Components/CardSmall/CardSmall'
import ButtonKembali from '../../Components/Button/ButtonKembali/ButtonKembali'
import Footer from '../../Components/Footer/Footer'
import './Agenda.css'

function Agenda() {
    return (

        <div className="">
        <section className="agenda">            
            <div className="container">
                    <a href="/">
                        <ButtonKembali/>
                    </a>
                    <div className="row mt-3 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-blue" day="1" title="Opening Ceremony"/>
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-blue" day="2" title="Faculty Tour"/>
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-red" day="3" title="Creature"/>
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-red" day="4" title="Young, Spirit, and Nationalism"/>
                        </div>
                        <div className="col-md-6 p-3">
                            <CardSmall color="bg-orange" day="5" title="Closing Ceremony"/>
                        </div>
                    </div>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Agenda

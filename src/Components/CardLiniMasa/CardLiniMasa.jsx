import React, {Fragment} from 'react'
import $ from 'jquery';
import Box from '../Box/Box'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CardLiniMasa.css'

function CardLiniMasa() {

    const options = {
        margin: 16,
        responsiveClass: true,
        owldots : true,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            0:{
            items:1
            },
            540:{
                items:2
            },
            992: {
            items: 3
            },
            1200: {
            items: 4
            }
        },
    };


    return (
        <Fragment>
            <div className="card-lini-masa card-component bg-cream p-md-5 p-3 d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-center text-blue fw-bold">LINI MASA</h3>
                <OwlCarousel className="mt-3" {...options}>
                    <div className="item mx-3">
                        <Box color="bg-blue" 
                        number="1" 
                        title="Mentoring MPKMB" 
                        date ="23 Juli 2021" 
                        time="08.00 WIB - 17.00 WIB"/>
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-red" 
                        number="2" 
                        title="Panduan MPKMB" 
                        date ="29 Juli 2021" 
                        time="08.00 WIB - 17.00 WIB"/>
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-orange"
                         number="3" 
                         title="Surat Keputusan Rektor" 
                         date ="30 Juli 2021" 
                         time="08.00 WIB - 17.00 WIB"/>
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-blue" 
                            number="4" 
                            title="Upacara Pembukaan MPKMB" 
                            date ="9 Agustus 2021" 
                            time="08.00 WIB - 17.00 WIB"/>
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-red" 
                        number="5" 
                        title="Narasi Besar" 
                        date ="9 Agustus 2021" 
                        time="08.00 WIB - 17.00 WIB"/>
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-orange" 
                        number="6" 
                        title="Upacara Penutupan MPKMB" 
                        date ="23 Agustus 2022" 
                        time="08.00 WIB - 17.00 WIB"/>
                    </div>
                </OwlCarousel>
            </div>
        </Fragment>
    )
}

export default CardLiniMasa

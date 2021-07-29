import React, { Fragment } from 'react'
import $ from 'jquery';
import Box from '../Box/Box'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import texture from '../../Assets/img/texture-blue.svg'
import './CardLiniMasa.css'


<<<<<<< HEAD
export const CardLiniMasa = () => {
=======
>>>>>>> e2594a432fdb7c07fa20e41393e2abd01a554b90
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
<<<<<<< HEAD
            <Fragment>
                <div className="card-lini-masa card-component bg-grey p-md-5 p-3 d-flex position-relative flex-column justify-content-center align-items-center">
                    <h3 className="text-center text-blue fw-bold">LINI MASA</h3>
                    <OwlCarousel className="mt-3" {...options}>
                        <div className="item mx-3">
                            <Box color="bg-blue" number="1" title="Mentoring MPKMB" date="23 Juli 2021" time="08.00 WIB - 17.00 WIB"
                                modalID="mentoring" />
                        </div>
                        <div className="item mx-3">
                            <Box color="bg-red" number="2" title="Panduan MPKMB" date="29 Juli 2021" time="08.00 WIB - 17.00 WIB"
                                modalID="panduan" />
                        </div>
                        <div className="item mx-3">
                            <Box color="bg-orange" number="3" title="Surat Keputusan Rektor" date="30 Juli 2021"
                                time="08.00 WIB - 17.00 WIB" modalID="sk" />
                        </div>
                        <div className="item mx-3">
                            <Box color="bg-blue" number="4" title="Upacara Pembukaan MPKMB" date="9 Agustus 2021"
                                time="08.00 WIB - 17.00 WIB" modalID="opening" />
                        </div>
                        <div className="item mx-3">
                            <Box color="bg-red" number="5" title="Narasi Besar" date="9 Agustus 2021"
                                time="08.00 WIB - 17.00 WIB" />
                        </div>
                    </OwlCarousel>
                </div>
                <div className="texture">
                    <div className="position-absolute texture-bottom-left">
                        <img src={texture} alt="texture" className="anime-flip" width="100%" />
=======
        <Fragment>
            <div className="card-lini-masa card-component bg-grey p-md-5 p-3 d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-center text-blue fw-bold">LINI MASA</h3>
                <OwlCarousel className="mt-3" {...options}>
                    <div className="item mx-3">
                        <Box color="bg-blue"
                            number="1"
                            title="Mentoring MPKMB"
                            date="23 Juli 2021"
                            time="08.00 WIB - 17.00 WIB"
                            modalID="mentoring" />
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-red"
                            number="2"
                            title="Panduan MPKMB"
                            date="29 Juli 2021"
                            time="08.00 WIB - 17.00 WIB"
                            modalID="panduan" />
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-orange"
                            number="3"
                            title="Surat Keputusan Rektor"
                            date="30 Juli 2021"
                            time="08.00 WIB - 17.00 WIB"
                            modalID="sk" />
                    </div>
                    <div className="item mx-3">
                        <Box color="bg-blue"
                            number="4"
                            title="Upacara Pembukaan MPKMB"
                            date="9 Agustus 2021"
                            time="08.00 WIB - 17.00 WIB"
                            modalID="opening" />
>>>>>>> e2594a432fdb7c07fa20e41393e2abd01a554b90
                    </div>
                    <div className="position-absolute texture-top-right">
                        <img src={texture} alt="texture" className="anime-flip" width="100%" />
                    </div>
<<<<<<< HEAD
                </div>
            </Fragment>
=======
                </OwlCarousel>
            </div>
        </Fragment>
>>>>>>> e2594a432fdb7c07fa20e41393e2abd01a554b90
    )
}

export default CardLiniMasa


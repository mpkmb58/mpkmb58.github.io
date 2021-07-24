import React from 'react'
import Box from '../Box/Box'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const CardLiniMasa = () => {
    return (
        <div className="owl-carousel owl-theme">
            <div className="item">
                <Box number="1" title="Opening MPKMB" date="23 November 2001" time="08.00 WIB - 17.00 WIB" color="bg-blue"/>
            </div>
            <div className="item">
                <Box number="2" title="Opening MPKMB" date="23 November 2001" time="08.00 WIB - 17.00 WIB" color="bg-red "/>
            </div>
        </div>
    )
}

export default CardLiniMasa

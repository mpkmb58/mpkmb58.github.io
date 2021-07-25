import React from 'react'
import texture from '../../Assets/img/texture.svg';
import logo1 from '../../Assets/img/logo biru muted.svg';
import logo2 from '../../Assets/img/logo hijau muted.svg';
import logo3 from '../../Assets/img/logo kuning muted.svg';
import logo4 from '../../Assets/img/logo merah muted.svg';
import logo5 from '../../Assets/img/logo ungu muted.svg';
import './CardAbout.css'

const CardAbout = () => {
    return (
        <div className="card-component bg-blue p-lg-5 p-3">
            <div className="texture-top-left">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-bottom-right">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-logo-about">
                <img className="mx-3 texture-img" src={logo1} alt="" srcset="" />
                <img className="mx-3 texture-img" src={logo2} alt="" srcset="" />
                <img className="mx-3 texture-img" src={logo3} alt="" srcset="" />
                <img className="mx-3 texture-img" src={logo4} alt="" srcset="" />
                <img className="mx-3 texture-img" src={logo5} alt="" srcset="" />
            </div>
            <h3 className="fw-bold">About MPKMB</h3>
        </div>
    )
}

export default CardAbout

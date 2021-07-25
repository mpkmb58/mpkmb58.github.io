import React from 'react'
import texture from '../../Assets/img/texture.svg';
import logoconsole from '../../Assets/img/VectorEvent-2.svg'
import './CardEvent.css'

const CardEvent = () => {
    return (
        <div className="card-component bg-orange p-lg-5 p-3 mb-md-0 mb-3">
            <div className="texture-top-left">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-bottom-right">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-logo-center texture-logo-center-rotateright">
                <img className="texture-img" src={logoconsole} alt="" srcset="" />
            </div>
            <h3 className="text-center fw-bold">Event MPKMB</h3>
        </div>
    )
}

export default CardEvent

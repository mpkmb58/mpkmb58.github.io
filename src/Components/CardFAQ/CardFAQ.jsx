import React from 'react'
import texture from '../../Assets/img/texture.svg';
import logofaq from '../../Assets/img/VectorFAQ.svg'
import './CardFAQ.css'

const CardFAQ = () => {
    return (
        <div>
            <div className="card-component card-clickable bg-orange p-lg-5 p-3">
                <div className="texture-top-right">
                    <img src={texture} alt="" srcset="" />
                </div>
                <div className="texture-bottom-left">
                    <img src={texture} alt="" srcset="" />
                </div>
                <div className="texture-logo-center">
                    <img  src={logofaq} alt="" srcset="" />
                </div>
                <h3 className="text-center fw-bold">FAQ</h3>
            </div>
        </div>
    )
}

export default CardFAQ

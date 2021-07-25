import React from 'react'
import texture from '../../Assets/img/texture.svg';
import './CardSponsorship.css'

const CardSponsorship = () => {
    return (
        <div className="card-component bg-blue p-3 my-4">
            <div className="texture-top-left">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-bottom-right">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="row sponsor-content">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <h3 className="fw-bolder text-lg-end text-center">Sponsor dan Media Partners</h3>
                    <div className="v-line bg-grey ms-4"></div>
                </div>
                <div className="h-line bg-grey"></div>
                <div className="col-md-8">

                </div>
            </div>
        </div>
    )
}

export default CardSponsorship

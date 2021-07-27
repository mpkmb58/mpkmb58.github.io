import React from 'react'
import './CardAgendaPenugasan.css'
import texture from '../../Assets/img/texture.svg';
import logoagenda from '../../Assets/img/Vectoragenda-logo.svg'
import logopenugasan from '../../Assets/img/VectorPenugasan.svg'

const CardAgendaPenugasan = () => {
    return (
        <div className="agenda card-component card-clickable bg-red p-lg-5 p-3">
            <div className="texture-top-center">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-bottom-center">
                <img src={texture} alt="" srcset="" />
            </div>
            <div className="texture-logo-agenda">
                <img className="texture-img" src={logoagenda} alt="" srcset="" />
            </div>
            <div className="texture-logo-penugasan">
                <img className="texture-img" src={logopenugasan} alt="" srcset="" />
            </div>

            <h3 className="text-center fw-bold">Agenda dan Penugasan</h3>
        </div>
    )
}

export default CardAgendaPenugasan

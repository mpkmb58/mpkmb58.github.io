import React from 'react'
import './CardVertical.css'
import logoagenda from '../../Assets/img/Vectoragenda-logo.svg'

const CardAgenda = (props) => {
    return (
        <div className="card-vertical bg-blue text-grey my-3 anime">
            <h3>{props.title}</h3>
            <div className="texture-bottom-big">
                <img src={logoagenda} alt="" className="anime-logo" />
            </div>
        </div>
    )
}

export default CardAgenda

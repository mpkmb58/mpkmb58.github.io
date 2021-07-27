import React from 'react'
import './CardVertical.css'
import logopenugasan from '../../Assets/img/VectorPenugasan.svg'

const CardPenugasan = (props) => {
    return (
        <div className="card-vertical bg-orange text-grey my-3 anime">
            <h3>{props.title}</h3>
            <div className="texture-bottom-big">
                <img src={logopenugasan} alt="" className="anime-logo" />
            </div>
        </div>
    )
}

export default CardPenugasan

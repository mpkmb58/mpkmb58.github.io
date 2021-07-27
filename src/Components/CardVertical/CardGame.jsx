import React from 'react'
import './CardVertical.css'
import logogame from '../../Assets/img/VectorEvent-2.svg'

const CardGame = (props) => {
    return (
        <div className="card-vertical bg-orange text-grey my-3 anime">
            <h3>{props.title}</h3>
            <div className="texture-bottom-big">
                <img src={logogame} alt="" srcset="" className="anime-logo" />
            </div>
        </div>
    )
}

export default CardGame

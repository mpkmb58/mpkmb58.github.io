import React from 'react'
import './CardVertical.css'
import logolampu from '../../Assets/img/VectorEvent.svg'

const CardVirEx = (props) => {
    return (
        <div className="card-vertical bg-blue text-grey my-3">
            <h3>{props.title}</h3>
            <div className="texture-bottom-big">
                <img src={logolampu} alt="" srcset="" />
            </div>
        </div>
    )
}

export default CardVirEx

import React from 'react'
import './CardVertical.css'
import logopanduan from '../../Assets/img/Vectorpanduan-logo.svg'

const CardPanduan = (props) => {
    return (
        <div className="card-vertical bg-red text-grey my-3 anime">
            <h3>{props.title}</h3>
            <div className="texture-bottom-big">
                <img src={logopanduan} alt="" className="anime-logo" />
            </div>
        </div>
    )
}

export default CardPanduan

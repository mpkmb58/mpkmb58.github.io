import React from 'react'
import './CardVertical.css'
import logo360 from '../../Assets/img/VectorEvent-1.svg'

const Card360 = (props) => {
    return (
        <div className="card-vertical bg-red text-grey my-3">
            <h3>{props.title}</h3>
            <div className="texture-bottom-big">
                <img src={logo360} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Card360

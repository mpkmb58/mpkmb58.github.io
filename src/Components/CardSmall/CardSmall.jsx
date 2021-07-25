import React from 'react'
import './CardSmall.css'


function CardSmall(props) {
    return (
        <div className={`card-small ${props.color} p-2`}>
            <h4 className="fw-bold text-grey text-center">Day {props.day} - {props.title}</h4>
        </div>
    )
}

export default CardSmall

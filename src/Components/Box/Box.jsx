import React from 'react'
import texture from '../../Assets/img/texture.svg'
import './Box.css'

const Box = (props) => {
    return (
        <div className={`box ${props.color} text-grey p-5`}>
            <div className="texture-box">
                <img src={texture} alt="" srcset="" />
            </div>
            <p className="texture-number fw-bold">{props.number}</p>
            <h5 className="text-center fw-bold">{props.title}</h5>
            <p className="date text-grey me-2 fw-bold">{props.date}<br></br><span class="fw-lighter">{props.time}</span></p>
            <div className="contentB">
                <div className="content p-3">
                    <button href="/" className="anchor py-1 px-3 rounded-pill" data-bs-toggle="modal" data-bs-target={`#${props.modalID}`}>
                        Selengkapnya
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Box

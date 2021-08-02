import React from 'react'
import texture from '../../Assets/img/texture.svg'
import './Box.css'

const Box = (props) => {
    return (
        <button className={`box ${props.color} text-grey p-5`} data-bs-toggle="modal" data-bs-target={`#${props.modalID}`}>
            <div className="texture-box">
                <img src={texture} alt="texture" />
            </div>
            <div className="texture-number fw-bold"><p>{props.number}</p></div>
            <h5 className="text-center fw-bold">{props.title}</h5>
            <p className="date text-grey me-2 fw-bold">{props.date}<br></br><span class="fw-lighter">{props.time}</span></p>
            {/* <div className="contentB">
                <div className="content p-3">
                    <button href="/" className="anchor py-1 px-3 rounded-pill" >
                        Selengkapnya
                    </button>
                </div>
            </div> */}
        </button>
    )
}

export default Box

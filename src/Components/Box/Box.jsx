import React from 'react'
import texture from '../../Assets/img/texture.svg'
import './Box.css'
// <div className="box bg-blue p-5">
        //     <div className="texture-1">
        //         <img src="img/texture.svg" alt="" srcset="">
        //     </div>
        //     <p className="texture-number text-grey">1</p>
        //     <h5 className="text-center text-grey">Mentoring MPKMB</h5>
        //     <p className="date text-grey mr-2">Senin, 9 Agustus 2021 <br><span class="fw-lighter">8.00 WIB - 17.00 WIB</span></p>
        //     <div className="contentB">
        //         <div className="content p-3">
        //             <a href="" className="py-1 px-3 rounded-pill">
        //                 Selengkapnya
        //             </a>
        //         </div>
        //     </div>
        // </div>

const Box = (props) => {
    return (
        <div className={`box ${props.color} text-grey p-5`}>
            <div className="texture-box">
                <img src={texture} alt="" srcset="" />
            </div>
            <p className="texture-number fw-bold">{props.number}</p>
            <h5 className="text-center fw-bold">{props.title}</h5>
            <p className="date text-grey me-2">{props.date}<br></br><span class="fw-lighter">{props.time}</span></p>
            <div className="contentB">
                <div className="content p-3">
                    <a href="/" className="anchor py-1 px-3 rounded-pill">
                        Selengkapnya
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Box

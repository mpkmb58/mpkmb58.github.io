import React, { useState} from 'react'
import './Magazine.css'
import styled from 'styled-components'
import arrowDown from '../../Assets/img/Arrowdown.svg'


function Magazine(props) {

    let [content, setContent] = useState(props.contentWrapper[0].isi);
    let [collapse, setCollapse] = useState(false);
    let [nav, setNav] = useState(props.contentWrapper[0].link);

    return (
        <div className="py-5 position-relative z-index-2">
            <div className="container pt-5 ">

                <div className="row mb-4 mx-lg-0 mx-0 justify-content-between">
                    <div className="col-lg-2 link bg-grey about-nav-wrapper position-relative p-lg-5 px-5  d-lg-none d-flex flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center overflow-visible">
                        <h3 className="m-0 my-3 text-center">{nav}</h3>
                        <div className="arrow-down position-absolute" onClick={() => setCollapse(!collapse)}>
                            <img src={arrowDown} alt="Arrow down" />
                        </div>
                        <div class={`drop-down bg-grey px-4 shadow-lg position-absolute col-4 overflow-hidden flex-column ${collapse ? 'd-flex' : 'd-none'}`}>
                            {
                                props.contentWrapper.map(e =>
                                    <div onClick={() => {
                                        setContent(props.contentWrapper[e.key].isi)
                                        setNav(props.contentWrapper[e.key].link)
                                        setCollapse(!collapse)
                                    }}
                                        className='hash btn position-relative  py-4'>
                                        <h5 className="m-0 text-center">{e.link}</h5>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div className="col-lg-2 bg-grey px-2 about-nav-wrapper py-5  d-lg-flex d-none flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center overflow-hidden " >
                        {
                            props.contentWrapper.map(e =>
                                <div onClick={() => {
                                    setContent(props.contentWrapper[e.key].isi)
                                    setNav(props.contentWrapper[e.key].link)
                                    setCollapse(collapse)
                                }}
                                    className='hash-dekstop position-relative btn m-0 py-3 '
                                >
                                    <h5 className="m-0">{e.link}</h5>
                                </div>
                            )
                        }

                    </div>
                    <div className="content col-lg-9 bg-grey about-nav-wrapper p-md-5 p-3 my-4 my-lg-0">
                        {content}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Magazine

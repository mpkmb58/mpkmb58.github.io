import React, { useState, useEffect } from 'react'
import './Magazine.css'
import arrowDown from '../../Assets/img/Arrowdown.svg'
import $ from 'jquery'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackButton from '../BackButton/BackButton';
import Breadcumb from '../Breadcumb/Breadcumb';




function Magazine(props) {

    let [content, setContent] = useState(props.contentWrapper[0].isi);
    let [collapse, setCollapse] = useState(false);
    let [nav, setNav] = useState(props.contentWrapper[0].link);

    useEffect(() => {
        $('.hash-dekstop').on('click', function () {
            $(this).addClass('btn-blue').siblings().removeClass('btn-blue')
        })

        AOS.init()
    }, [])


    

    return (
        <div className="magazine position-relative z-index-2" >
            <div className="container pt-5">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <BackButton prevPage={props.prevPage}/>
                        <div className="d-sm-block d-none">
                            <Breadcumb depth={props.depth} prevPage={props.prevPage} prevPrevPage={props.prevPrevPage} prev={props.prev} current={props.current} prevPrev={props.prevPrev}/>
                        </div>
                    </div>
                    <div className="d-sm-none d-block pt-4">
                        <Breadcumb depth={props.depth} prevPage={props.prevPage} prevPrevPage={props.prevPrevPage} prev={props.prev} current={props.current} prevPrev={props.prevPrev}/>
                    </div>
                </div>
                <div className="row mt-4 mb-4 mx-lg-0 mx-0 m-auto justify-content-between">
                    {/* MOBILE */}
                    <div className="col-lg-2 link bg-grey about-nav-wrapper position-relative px-0 d-lg-none d-flex flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center overflow-visible" onClick={() => setCollapse(!collapse)}>
                        <h3 className="m-0 my-3 text-center">{nav}</h3>
                        <div className="arrow-down position-absolute" >
                            <img src={arrowDown} alt="Arrow down" />
                        </div>
                        <div class={`drop-down bg-grey px-0 shadow-lg position-absolute col-4 overflow-hidden flex-column ${collapse ? 'd-flex' : 'd-none'}`}>
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
                    {/* DEKSTOP */}
                    <div className="link-page col-lg-2 bg-grey about-nav-wrapper py-5 px-0 d-lg-flex d-none flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center overflow-hidden " data-aos="fade-right">
                        {
                            props.contentWrapper.map(e =>
                                <div onClick={() => {
                                    setContent(props.contentWrapper[e.key].isi)
                                    setNav(props.contentWrapper[e.key].link)
                                    setCollapse(collapse)
                                }}
                                    className='hash-dekstop position-relative  btn m-0 py-3 '
                                >
                                    <h5 className="m-0">{e.link}</h5>
                                </div>
                            )
                        }

                    </div>
                    <div className="content bg-grey position-relative overflow-hidden px-0 col-lg-9 about-nav-wrapper my-4 my-lg-0" data-aos="fade-up">
                        {/* <div className="texture-left position-abolute z-index-3">
                            <img src={texture} alt="" srcset="" />
                        </div>
                        <div className="texture-right position-abolute z-index-3">
                            <img src={texture} alt="" srcset="" />
                        </div> */}
                        <div class="content-parent position-relative px-4 px-lg-5 py-4 " data-aos="fade-left">
                            <div class="content-child">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Magazine

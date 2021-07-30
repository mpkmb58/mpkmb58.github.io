import React, { useEffect, useRef } from 'react'
import './SectionA.css'
import Coin from '../../Assets/img/coin-ipb.svg'
import { TweenMax, Power3 } from "gsap";


function SectionA() {

    let CoinIpb = useRef(null)

    useEffect(() => {
        TweenMax.from(CoinIpb, {
            y: 20,
            duration: 2,
            opacity: 0,
            ease: Power3.easeOut
        })

    }, [])
    return (

        <section className="banner a panel d-flex align-items-center overflow-hidden" >
            <div className="hero container-lg d-flex justify-content-lg-start justify-content-center align-items-center">
                <div className="mx-2 hero-mahardika d-flex flex-column align-items-center">
                    <div>
                        <h4 className="hero-banner fw-bold text-blue mahardika">Mahardika</h4>
                    </div>
                    <div>
                        <h1 className="hero-banner fw-bold text-blue cakrabinaya">Cakrabinaya</h1>
                    </div>
                    <div className="text-center">

                        <h5 >Perjuangan Merasionalisasi Mimpi untuk <br className="d-md-block d-none" />
                            Berkontribusi bagi Negeri
                        </h5>
                    </div>
                </div>
            </div>


            <div className="coin-wrapper container d-flex justify-content-lg-end justify-content-center align-items-end">
                <img src={Coin} className="coin" alt="Illustrasi Coin IPB" ref={el => CoinIpb = el} />

            </div>

        </section>
    )
}

export default SectionA

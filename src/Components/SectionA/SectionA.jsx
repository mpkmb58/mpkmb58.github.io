import React from 'react'
import './SectionA.css'
import Coin from '../../Assets/img/coin-ipb.svg'


function SectionA() {
    return (
        <section className="banner a panel bg-grey d-flex align-items-center overflow-hidden" >
            <div className="hero container-lg d-flex justify-content-lg-start justify-content-center align-items-center">
                <div className="mx-2 hero-mahardika d-flex flex-column align-items-center">
                    <div>
                        <h4 className="hero-banner fw-bold text-blue mahardika">Mahardika</h4>
                    </div>
                    <div>
                        <h1 className="hero-banner fw-bold text-blue cakrabinaya">Cakrabinaya</h1>
                    </div>
                    <div className="text-center">
                        <h5 className="perjuangan">Perjuangan Merasionalisasi Mimpi untuk <br />
                            Berkontribusi bagi Negeri
                        </h5>
                    </div>
                </div>
            </div>

            <div className="coin-wrapper container d-flex justify-content-lg-end justify-content-center align-items-end">
                <img src={Coin} className="coin" alt="Illustrasi Coin IPB" />
            </div>

        </section>
    )
}

export default SectionA

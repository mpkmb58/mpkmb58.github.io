import React from 'react'
import './SectionA.css'
import Coin from '../../Assets/img/coin-ipb.svg'


function SectionA() {
    return (
        <section class="banner a panel bg-grey d-flex align-items-center overflow-hidden" >
            <div class="hero container-lg d-flex justify-content-lg-start justify-content-center align-items-center">
                <div class="mx-2 hero-mahardika d-flex flex-column align-items-center">
                    <div>
                        <h4 class="hero-banner fw-bold text-blue mahardika">Mahardika</h4>
                    </div>
                    <div>
                        <h1 class="hero-banner fw-bold text-blue cakrabinaya">Cakrabinaya</h1>
                    </div>
                    <div class="text-center">
                        <p>Perjuangan Merasionalisasi Mimpi untuk <br />
                            Berkontribusi bagi Negeri
                        </p>
                    </div>
                </div>
            </div>

            <div class="coin-wrapper container d-flex justify-content-sm-end justify-content-center align-items-end">
                <img src={Coin} class="coin" alt="Illustrasi Coin IPB" />
            </div>

        </section>
    )
}

export default SectionA

import React, { Suspense} from 'react'
import './SectionA.css'
import Coin from '../../Assets/img/coin-ipb.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'


// const Coin = lazy(() => import('../../Assets/img/coin-ipb.svg'));

AOS.init();


function SectionA() {

    const Banner = styled.div`
        position: relative;
        min-height : 100vh; 
        display: flex;
        align-items: center;
        overflow: hidden;
        &::after{
            content: '';
            position: absolute;
            background-image: url('../../Assets/img/leaf.svg');
            bottom: 0;
            left: 0;
            right: 0;
            min-height: 150px;
            background-repeat: repeat-x;
            background-size: auto;
            background-position: bottom center;
            z-index: 3;
            transform: translateY(20px);
        }
    `

    const HeroBanner = styled.div`
        font-family: 'Cinzel Decorative', poppins;
        font-size: calc(0.5rem + 4vmin);
    `

    const Hero = styled.div`
        position: relative;
        z-index: 2;
    `

    const CoinWrapper = styled.div`
        position: absolute;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        z-index: 1;
    `

    const CoinImg = styled.img`
        width: calc(10rem + 20vw);

        @media (min-height : 500px){
            width: 50vmin;
        }

        @media (min-height : 1200p) {
            width: calc(10rem + 30vh);
        }
    `
    
    return (
        <Banner className="banner a panel" >
            <Suspense>
                <Suspense>
                    <Hero className="container-lg d-flex justify-content-lg-start justify-content-center align-items-center">
                        <div className="mx-2 hero-mahardika d-flex flex-column align-items-center" data-aos="fade-right">
                            <div>
                                <HeroBanner className="h4 fw-bold text-blue mahardika">Mahardika</HeroBanner>
                            </div>
                            <div>
                                <HeroBanner className="h1 fw-bold text-blue cakrabinaya">Cakrabinaya</HeroBanner>
                            </div>
                            <div className="fw-bold text-blue">
                                <h5 className="text-center"><span className="fw-bold">Perjuangan</span> Merasionalisasi <span className="fw-bold">Mimpi</span> untuk <br className="d-md-block d-none" />
                                    <span className="fw-bold">Berkontribusi</span> bagi <span className="fw-bold">Negeri</span>
                                </h5>
                            </div>
                        </div>
                    </Hero>
                </Suspense>

                <CoinWrapper className="container d-flex justify-content-lg-end justify-content-center align-items-end">
                    <CoinImg src={Coin} className="coin" alt="Illustrasi Coin IPB" data-aos="fade-up-left" />
                </CoinWrapper>
            </Suspense>
        </Banner>
    )
}

export default SectionA

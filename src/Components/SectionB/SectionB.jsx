import React from 'react'
import Card from '../Card/Card'
import logo1 from '../../Assets/img/logo biru muted.svg';
import logo2 from '../../Assets/img/logo hijau muted.svg';
import logo3 from '../../Assets/img/logo kuning muted.svg';
import logo4 from '../../Assets/img/logo merah muted.svg';
import logo5 from '../../Assets/img/logo ungu muted.svg';
import logoconsole from '../../Assets/img/VectorEvent-2.svg'
import logoPenugasan from '../../Assets/img/VectorPenugasan.svg'
import logoAgenda from '../../Assets/img/Vectoragenda-logo.svg'
import logofaq from '../../Assets/img/VectorFAQ.svg'


import './SectionB.css'

function SectionB() {
    const logoLogo = <div className="element-bg d-flex">
        <img className="mx-3 bg-logo" src={logo1} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo2} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo3} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo4} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo5} alt="logo-bg" width="100%" />
    </div>

    const logoConsole = <div className="logo-console-wrapper element-bg">
        <img className="bg-logo" src={logoconsole} alt="logo-bg" width="100%" />
    </div>

    const logoFAQ = <div className="element-bg"><img className="mx-3 bg-logo" src={logofaq} alt="logo-bg" width="100%" /> </div>

    const penugasan =
        <div className="wrapper position-absolute d-flex">
            <div className="scale-up agenda-logo-wrapper element-bg">
                <img className="mx-3 bg-logo" src={logoAgenda} alt="logo-bg" width="100%" />
            </div>
            <div className="scale-up penugasan-logo-wrapper element-bg">
                <img className="mx-3 bg-logo" src={logoPenugasan} alt="logo-bg" width="100%" />
            </div>
        </div>

    const sponsor = <div className="wrapper position-abolute container pt-3">
        <div className="row ">
            <div className="col-md-4 pe-4 d-flex flex-column flex-md-row align-items-center">
                <h3 className="mb-1 mb-md-0 fw-bold text-grey text-end me-lg-1">Sponsor dan Media Partner</h3>
                <div className="borders-V ms-1 bg-grey d-none d-md-block"></div>
                <div className="borders-H mt-1 bg-grey d-md-none d-block"></div>
            </div>
            <div className="col-md-8">

            </div>
        </div>
    </div>


    return (
        <section className="bg-grey b py-4" >
            <div className="container">
                <div className="row">
                    <div className="col-12 about-wrapper">
                        <Card
                            directTo="/About"
                            title="About MPKMB"
                            color="bg-blue"
                            backgorund={logoLogo}
                            texture={true}
                            bgPositionTop='texture-top-left'
                            bgPositionBottom='texture-bottom-right'
                            animateBottom={true} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <Card
                            directTo="/Event"
                            title="Event MPKMB"
                            color="bg-orange"
                            backgorund={logoConsole}
                            texture={true}
                            bgPositionTop='texture-top-left'
                            bgPositionBottom='texture-bottom-right'
                        />
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                        <Card
                            directTo="/FAQ"
                            title="FAQ"
                            color="bg-orange"
                            backgorund={logoFAQ}
                            texture={true}
                            bgPositionTop='texture-top-right'
                            bgPositionBottom='texture-bottom-left'
                            animateTop={true} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 about-wrapper">
                        <Card
                            directTo="/AgendaPenugasan"
                            title="Agenda dan Penugasan"
                            color="bg-red"
                            backgorund={penugasan}
                            texture={true}
                            bgPositionTop='texture-top-center'
                            bgPositionBottom='texture-bottom-center'
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 about-wrapper">
                        <Card
                            directTo=""
                            title=''
                            viewSponsor={sponsor}
                            color="bg-blue"
                            backgorund=''
                            texture={true}
                            bgPositionTop='texture-top-left'
                            bgPositionBottom='texture-bottom-right'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionB

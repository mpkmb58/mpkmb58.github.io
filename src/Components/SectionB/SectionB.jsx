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
    const logoLogo = <div className="element-bg d-flex scale-up">
        <img className="mx-3 bg-logo" src={logo1} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo2} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo3} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo4} alt="logo-bg" width="100%" />
        <img className="mx-3 bg-logo" src={logo5} alt="logo-bg" width="100%" />
    </div>

    const logoConsole = <div className="logo-console-wrapper scale-up">
        <img className="bg-logo" src={logoconsole} alt="logo-bg" width="100%" />
    </div>

    const logoFAQ = <div className="element-bg scale-up"><img className="mx-3 bg-logo" src={logofaq} alt="logo-bg" width="100%" /> </div>

    const penugasan =
        <div className="wrapper position-absolute d-flex">
            <div className="scale-up agenda-logo-wrapper">
                <img className="mx-3 bg-logo" src={logoAgenda} alt="logo-bg" width="100%" />
            </div>
            <div className="scale-up penugasan-logo-wrapper">
                <img className="mx-3 bg-logo" src={logoPenugasan} alt="logo-bg" width="100%" />
            </div>
        </div>


    return (
        <section className="bg-grey b py-4" >
            <div class="container">
                <div class="row">
                    <div class="col-12 about-wrapper">
                        <Card
                            directTo="/About"
                            title="About MPKMB"
                            color="bg-blue"
                            backgorund={logoLogo}
                            bgPosition=""
                            animate={true} />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <Card
                            directTo="/Event"
                            title="Event MPKMB"
                            color="bg-orange"
                            backgorund={logoConsole}
                            bgPosition=""
                            animate={true} />
                    </div>
                    <div class="col-md-6 mt-3 mt-md-0">
                        <Card
                            directTo="/FAQ"
                            title="FAQ"
                            color="bg-orange"
                            backgorund={logoFAQ}
                            bgPosition=""
                            animate={true} />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 about-wrapper">
                        <Card
                            directTo="/AgendaPenugasan"
                            title="Agenda dan Penugasan"
                            color="bg-red"
                            backgorund={penugasan}
                            bgPosition=""
                            animate={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionB

import React from "react"
import logo1 from '../../Assets/img/logo biru muted.svg';
import logo2 from '../../Assets/img/logo hijau muted.svg';
import logo3 from '../../Assets/img/logo kuning muted.svg';
import logo4 from '../../Assets/img/logo merah muted.svg';
import logo5 from '../../Assets/img/logo ungu muted.svg';
import logoconsole from '../../Assets/img/VectorEvent-2.svg'
import logoPenugasan from '../../Assets/img/VectorPenugasan.svg'
import logoAgenda from '../../Assets/img/Vectoragenda-logo.svg'
import logofaq from '../../Assets/img/VectorFAQ.svg'
import logoInaco from '../../Assets/img/Sponsor-Inaco.svg'
import logoHimalaya from '../../Assets/img/Sponsor-Himalaya.svg'
import logoIDX from '../../Assets/img/sponsor-IDX.svg'
    
    export const logoLogo = <div className="about-bg-logo d-flex">
        <img className="mx-3" src={logo1} alt="logo-bg" />
        <img className="mx-3" src={logo2} alt="logo-bg" />
        <img className="mx-3" src={logo3} alt="logo-bg" />
        <img className="mx-3" src={logo4} alt="logo-bg" />
        <img className="mx-3" src={logo5} alt="logo-bg" />
    </div>

    export const logoConsole = <div className="logo-console-wrapper rotate-bg-logo">
        <img loading="lazy" className="bg-logo" src={logoconsole} alt="logo-bg" />
    </div>

    export const logoFAQ = <div className="rotate-bg-logo"><img className="mx-3 bg-logo" src={logofaq} alt="logo-bg" /> </div>

    export const penugasan =
        <div className="wrapper position-absolute d-flex">
            <div className="scale-up agenda-logo-wrapper rotate-bg-logo">
                <img className="mx-3 bg-logo" src={logoAgenda} alt="logo-bg" />
            </div>
            <div className="scale-up penugasan-logo-wrapper rotate-bg-logo">
                <img loading="lazy" className="mx-3 bg-logo" src={logoPenugasan} alt="logo-bg" />
            </div>
        </div>

    export const sponsor = <div className="wrapper position-abolute container p-3">
        <div className="row py-4">
            <div className="col-md-4 pe-4 d-flex flex-column flex-md-row align-items-center">
                <h3 className="mb-1 mb-md-0 fw-bold text-grey text-lg-end text-center me-lg-1">Sponsor dan Media Partner</h3>
                <div className="borders-V ms-5 bg-grey d-none d-md-block"></div>
                <div className="borders-H mt-3 bg-grey d-md-none d-block"></div>
            </div>
            <div className="col-md-8 py-3 d-flex flex-column flex-md-row align-items-center align-items-lg-start">
                <div className="box-sponsor bg-grey py-2 px-4 mx-2 d-flex align-items-center justify-content-center">
                    <img loading="lazy" src={logoInaco} alt="" srcset="" />
                </div>
                <div className="box-sponsor bg-grey py-2 px-4 mx-2 d-flex align-items-center justify-content-center">
                    <img loading="lazy" src={logoHimalaya} alt="" srcset="" />
                </div>
                <div className="box-sponsor bg-grey py-2 px-4 mx-2 d-flex align-items-center justify-content-center">
                    <img loading="lazy" className="scaled-up" src={logoIDX} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>  
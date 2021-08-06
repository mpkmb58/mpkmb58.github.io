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
import logoFrisian from '../../Assets/img/logo_FrisianFlag.svg'
import logoWardah from '../../Assets/img/Logo-Wardah 1.svg'
import logoKompas from '../../Assets/img/Logo Kompas.svg'
import logoWisata from '../../Assets/img/Logo Wisata Jangari Hills_preview_rev_1 1.svg'
    
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
            <div className="col-lg-4 pe-2 d-flex flex-column flex-lg-row align-items-center">
                <h3 className="mb-1 mb-md-0 fw-bold text-grey text-lg-end text-center me-lg-1">Sponsor dan Media Partner</h3>
                <div className="borders-V ms-xl-5 ms-lg-3 bg-grey d-none d-lg-block"></div>
                <div className="borders-H mt-3 bg-grey d-lg-none d-block"></div>
            </div>
            <div className="col-lg-8 d-flex align-items-center py-3 px-xl-5 px-lg-3 px-4">
                <div className="sponsor row d-flex d-flex flex-row align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center">
                        <img loading="lazy" className="scaled-up-one" src={logoIDX} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center d-sm-none d-block">
                        <img loading="lazy" className="scaled-up" src={logoFrisian} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center">
                        <img loading="lazy" src={logoHimalaya} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center">
                        <img loading="lazy" src={logoWardah} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center d-sm-block d-none">
                        <img loading="lazy"  src={logoFrisian} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center">
                        <img loading="lazy" className="scaled-up" src={logoWisata} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center">
                        <img loading="lazy" className="scaled-up" src={logoInaco} alt="" srcset="" />
                    </div>
                    <div className="box-sponsor bg-grey d-flex align-items-center justify-content-center">
                        <img loading="lazy" src={logoKompas} alt="" srcset="" />
                    </div>
                </div>     
            </div>
        </div>
    </div>  
import React, { Fragment } from 'react'
import Card from '../Card/Card'
import CardLiniMasa from '../../Components/CardLiniMasa/CardLiniMasa'
import Modal from '../../Components/Modal/Modal'
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
        <img className="mx-3 bg-logo" src={logo1} alt="logo-bg" />
        <img className="mx-3 bg-logo" src={logo2} alt="logo-bg" />
        <img className="mx-3 bg-logo" src={logo3} alt="logo-bg" />
        <img className="mx-3 bg-logo" src={logo4} alt="logo-bg" />
        <img className="mx-3 bg-logo" src={logo5} alt="logo-bg" />
    </div>

    const logoConsole = <div className="logo-console-wrapper element-bg">
        <img className="bg-logo" src={logoconsole} alt="logo-bg" />
    </div>

    const logoFAQ = <div className="element-bg"><img className="mx-3 bg-logo" src={logofaq} alt="logo-bg" /> </div>

    const penugasan =
        <div className="wrapper position-absolute d-flex">
            <div className="scale-up agenda-logo-wrapper element-bg">
                <img className="mx-3 bg-logo" src={logoAgenda} alt="logo-bg" />
            </div>
            <div className="scale-up penugasan-logo-wrapper element-bg">
                <img className="mx-3 bg-logo" src={logoPenugasan} alt="logo-bg" />
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
        <Fragment>
            <Modal
                id="mentoring"
                title="MENTORING MPKMB"
                content={<p className="text-center text-blue"><span className="fw-bold">Mentoring</span> merupakan rangkaian acara MPKMB yang bertujuan untuk mempersiapkan calon mahasiswa baru dalam menjalani rangkaian acara utama MPKMB. Mentoring pada MPKMB tahun 2021 dilaksanakan pada tanggal <span className="fw-bold">23 Juli - 7 Agustus 2021 untuk gelombang pertama</span>, <span className="fw-bold">sedangkan 4 - 7 Agustus 2021 untuk gelombang kedua.</span></p>}
                size="modal-lg"
            />
            <Modal
                id="panduan"
                title="Panduan MPKMB"
                content=
                {
                    <Fragment>
                        <iframe className="iframe-size" src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></iframe>
                        <button className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey">Download PDF</button>
                    </Fragment>
                }
                size="modal-lg"
            />

            <Modal
                id="sk"
                title="Surat Keputusan Rektor"
                content=
                {
                    <Fragment>
                        <iframe src="https://drive.google.com/file/d/1j7YX38amioVZ70wvJgo76BqY6jzXfGDV/preview" className="iframe-size" allow="autoplay"></iframe>
                        <button className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey">Download PDF</button>
                    </Fragment>
                }
                size="modal-lg"
            />
            <Modal
                id="opening"
                title="Opening MPKMB"
                content={<p className="text-center text-blue">Upacara pembukaan Masa Pengenalan Kampus Mahasiswa Baru atau <span className="fw-bold">Opening Ceremony MPKMB</span> merupakan momentum peresmian pembukaan rangkaian acara MPKMB yang akan dilaksanakan pada tanggal <span className="fw-bold">9 Agustus 2021.</span></p>}
                size="modal-lg"
            />
            <Modal
                id="narasi"
                title="Coming Soon"
                content={`Content Will be update soon!`}
                size="modal-lg"
            />
            <section className="b py-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 about-wrapper">
                            <Card
                                directTo="/About"
                                title="About MPKMB"
                                color="bg-blue"
                                background={logoLogo}
                                texture={true}
                                bgPositionTop='texture-top-left'
                                bgPositionBottom='texture-bottom-right'
                                animateBottom={true}
                                animateTop={true} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <CardLiniMasa />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">

                            <Card
                                directTo="/Event"
                                title="Event MPKMB"
                                color="bg-orange"
                                background={logoConsole}
                                texture={true}
                                bgPositionTop='texture-top-left'
                                bgPositionBottom='texture-bottom-right'
                                animateTop={true} />
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                            <Card
                                directTo="/FAQ"
                                title="FAQ"
                                color="bg-orange"
                                background={logoFAQ}
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
                                background={penugasan}
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
                                background=''
                                texture={true}
                                bgPositionTop='texture-top-left'
                                bgPositionBottom='texture-bottom-right'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default SectionB

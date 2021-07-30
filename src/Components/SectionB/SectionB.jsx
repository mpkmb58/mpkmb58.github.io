import React, { Fragment, lazy, Suspense } from 'react'
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
import panduanPDF from '../../Assets/documents/GuideBook.pdf'
import skRektorPDF from '../../Assets/documents/Surat Edaran - Penetapan Awal Tahun Akademik 2020_2021.pdf'
import './SectionB.css'

const Modal = lazy(() => import('../../Components/Modal/Modal'))
const CardLiniMasa = lazy(() => import('../../Components/CardLiniMasa/CardLiniMasa'))
const Card = lazy(() => import('../Card/Card'))


function SectionB() {
    const logoLogo = <div className="element-bg d-flex">
        <img loading="lazy" className="mx-3 bg-logo" src={logo1} alt="logo-bg" />
        <img loading="lazy" className="mx-3 bg-logo" src={logo2} alt="logo-bg" />
        <img loading="lazy" className="mx-3 bg-logo" src={logo3} alt="logo-bg" />
        <img loading="lazy" className="mx-3 bg-logo" src={logo4} alt="logo-bg" />
        <img loading="lazy" className="mx-3 bg-logo" src={logo5} alt="logo-bg" />
    </div>

    const logoConsole = <div className="logo-console-wrapper element-bg">
        <img loading="lazy" className="bg-logo" src={logoconsole} alt="logo-bg" />
    </div>

    const logoFAQ = <div className="element-bg"><img className="mx-3 bg-logo" src={logofaq} alt="logo-bg" /> </div>

    const penugasan =
        <div className="wrapper position-absolute d-flex">
            <div className="scale-up agenda-logo-wrapper element-bg">
                <img loading="lazy" className="mx-3 bg-logo" src={logoAgenda} alt="logo-bg" />
            </div>
            <div className="scale-up penugasan-logo-wrapper element-bg">
                <img loading="lazy" className="mx-3 bg-logo" src={logoPenugasan} alt="logo-bg" />
            </div>
        </div>

    const sponsor = <div className="wrapper position-abolute container p-3">
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


    return (
        <Fragment>
            <Suspense fallback={<h1>Loading..</h1>}>
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
                            <iframe loading="lazy" src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></iframe>
                            <a href={panduanPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Guide Book MPKMB 58.pdf">Download PDF</a>
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
                            <iframe loading="lazy" src="https://drive.google.com/file/d/1j7YX38amioVZ70wvJgo76BqY6jzXfGDV/preview" allow="autoplay" ></iframe>
                            <a href={skRektorPDF} className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey" download="Surat Edaran - Penetapan Awal Tahun Akademik 2020_2021.pdf">Download PDF</a>
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


                            </div>å
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
                                    animateTop={true}
                                />

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
                                />

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
            </Suspense>

        </Fragment>
    )
}

export default SectionB

import React, {Fragment} from 'react'
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
        

    return (
        <Fragment>
        <Modal 
                id="mentoring"
                title = "MENTORING MPKMB"
                content = {<p className="text-center text-blue"><span className="fw-bold">Mentoring</span> merupakan rangkaian acara MPKMB yang bertujuan untuk mempersiapkan calon mahasiswa baru dalam menjalani rangkaian acara utama MPKMB. Mentoring pada MPKMB tahun 2021 dilaksanakan pada tanggal <span className="fw-bold">23 Juli - 7 Agustus 2021 untuk gelombang pertama</span>, <span className="fw-bold">sedangkan 4 - 7 Agustus 2021 untuk gelombang kedua.</span></p>}
                size ="modal-lg"
            />
            <Modal
                id="panduan"
                title = "Panduan MPKMB"
                content = 
                {
                    <Fragment>
                        <iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" width="640" height="350" allow="autoplay"></iframe>
                        <button className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey">Download PDF</button>
                    </Fragment>
                }
                size ="modal-lg"
            />
            
            <Modal
                id="sk"
                title = "Surat Keputusan Rektor"
                content = 
                {
                    <Fragment>
                        <iframe src="https://drive.google.com/file/d/1j7YX38amioVZ70wvJgo76BqY6jzXfGDV/preview" width="640" height="350" allow="autoplay"></iframe>
                        <button className="mt-3 bg-blue py-1 px-3 rounded-pill text-grey">Download PDF</button>
                    </Fragment>
                }
                size ="modal-lg"
            />
            <Modal 
                id="opening"
                title = "Opening MPKMB"
                content = {<p className="text-center text-blue">Upacara pembukaan Masa Pengenalan Kampus Mahasiswa Baru atau <span className="fw-bold">Opening Ceremony MPKMB</span> merupakan momentum peresmian pembukaan rangkaian acara MPKMB yang akan dilaksanakan pada tanggal <span className="fw-bold">9 Agustus 2021.</span></p>}
                size ="modal-lg"
            />
        <section className="bg-grey b py-4" >
            <div class="container">
                <div class="row">
                    <div class="col-12 about-wrapper">
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
                    <div className="col-12">
                        <CardLiniMasa/>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6">
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
                    <div class="col-md-6 mt-3 mt-md-0">
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
                <div class="row mt-3">
                    <div class="col-12 about-wrapper">
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
                <div class="row mt-3">
                    <div class="col-12 about-wrapper">
                        <Card
                            directTo=""
                            title="Sponsorship"
                            color="bg-blue"
                            backgorund=""
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

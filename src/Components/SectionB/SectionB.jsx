import React from 'react'
import { Fragment } from 'react'
import CardAbout from '../CardAbout/CardAbout'
import CardAgendaPenugasan from '../CardAgendaPenugasan/CardAgendaPenugasan'
import CardEvent from '../CardEvent/CardEvent'
import CardFAQ from '../CardFAQ/CardFAQ'
import CardLiniMasa from '../CardLiniMasa/CardLiniMasa'
import CardSponsorship from '../CardSponsorship/CardSponsorship'
import Modal from '../Modal/Modal'
import Footer from '../Footer/Footer'
import './SectionB.css'

function SectionB() {
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
                    <iframe src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" width="640" height="350" allow="autoplay"></iframe>
                }
                size ="modal-lg"
            />
            
            <Modal
                id="sk"
                title = "Surat Keputusan Rektor"
                content = 
                {
                    <iframe src="https://drive.google.com/file/d/1j7YX38amioVZ70wvJgo76BqY6jzXfGDV/preview" width="640" height="350" allow="autoplay"></iframe>
                }
                size ="modal-lg"
            />
            <Modal 
                id="opening"
                title = "Opening MPKMB"
                content = {<p className="text-center text-blue">Upacara pembukaan Masa Pengenalan Kampus Mahasiswa Baru atau <span className="fw-bold">Opening Ceremony MPKMB</span> merupakan momentum peresmian pembukaan rangkaian acara MPKMB yang akan dilaksanakan pada tanggal <span className="fw-bold">9 Agustus 2021.</span></p>}
                size ="modal-lg"
            />
            <section className="bg-grey panel bg-blur" >
                <div className="container">
                    <div className="card-batch my-3 my-lg-4">
                        <CardAbout />
                    </div>
                    <div className="card-batch my-3 my-lg-4">
                        <CardLiniMasa />
                    </div>
                    <div className="row my-3 my-lg-4">
                        <div className="col-md-6">
                            <a href="/Event MPKMB" className="card-batch">
                                <CardEvent />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="card-batch">
                                <CardFAQ />
                            </div>
                        </div>
                    </div>
                    <a href="/Agenda dan Penugasan" className="card-batch my-3 my-lg-4">
                        <CardAgendaPenugasan />
                    </a>
                    <div className="card-batch mt-3 mt-lg-4 pb-3">
                        <CardSponsorship />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>

    )
}

export default SectionB

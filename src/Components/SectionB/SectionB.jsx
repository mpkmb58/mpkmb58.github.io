import React, { Fragment, lazy, Suspense } from 'react'
import { logoLogo, logoConsole, logoFAQ, penugasan, sponsor} from './SectionB.data'
import panduanPDF from '../../Assets/documents/GuideBook.pdf'
import skRektorPDF from '../../Assets/documents/Surat Edaran - Penetapan Awal Tahun Akademik 2020_2021.pdf'
import './SectionB.css'
import Loader from '../Loader/Loader';
import kelompokPDF from '../../Assets/documents/Enrollment Key Mahardika Cakrabinaya.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'

AOS.init();


const ComingSoon = lazy(() => import('../ComingSoon/ComingSoon'));
const Modal = lazy(() => import('../../Components/Modal/Modal'))
const CardLiniMasa = lazy(() => import('../../Components/CardLiniMasa/CardLiniMasa'))
const Card = lazy(() => import('../Card/Card'))

const ModalDoc = styled.iframe`
        width: 95%;
        aspect-ratio: 16/9;
        z-index: 0;
        
    @media (max-width : 768px){
        width : 95%;
        aspect-ratio: 3/4;
        z-index: 0;
    }
    
    `
const AboutWrapper = styled.div`
    position: relative;
    z-index: 1;
`

function SectionB() {
    return (
        <Fragment>
            <Suspense fallback={<Loader></Loader>}>
                <Suspense>
                    <Suspense>
                        <Modal
                            id="mentoring"
                            title="MENTORING MPKMB"
                            content={
                                <div className="text-blue">
                                    <Fragment>
                                    <p className="text-blue">Pada kegiatan mentoring, kalian akan diberikan informasi yang diperlukan untuk mengikuti seluruh kegiatan MPKMB. Kalian akan dibagi menjadi beberapa kelompok dan dibimbing oleh seorang kakak mentor. Unduh informasi pembagian kelompok <a href={kelompokPDF} className="fw-bold" download="Enrollment Key Mahardika Cakrabinaya.pdf">disini.</a></p>
                                    <p> Mentoring akan dilaksakan <strong>dalam dua sesi</strong>: <br/>
                                        <ul>
                                            <li>Sesi Pertama : </li>
                                            <li>Sesi Kedua   : </li>
                                        </ul>
                                    </p>
                                    <p>
                                    Informasi lebih lanjut tentang mentoring dapat dibaca pada laman <a className="fw-bold text-decoration-none" target="_blank" href="https://course.ipb.ac.id/course/view.php?id=1363"> course.ipb.ac.id</a></p>
                                    </Fragment>
                                </div>
                            }
                            size="modal-lg"
                        />

                        <Modal
                            id="panduan"
                            title="Panduan MPKMB"
                            content=
                            {
                                <Fragment>
                                    <ModalDoc loading="lazy" src="https://drive.google.com/file/d/1nnoVjlCXwGVSYG39SJIOicxGOU3wjKub/preview" allow="autoplay"></ModalDoc>
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
                                    <ModalDoc loading="lazy" src="https://drive.google.com/file/d/1j7YX38amioVZ70wvJgo76BqY6jzXfGDV/preview" allow="autoplay" ></ModalDoc>
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

                        <ComingSoon/>
                    </Suspense>
            
                <section className="b" >
                    <div className="container">
                        <div className="row mb-3">
                            <AboutWrapper className="col-12">
                                <Card
                                    directTo="/About"
                                    title="About MPKMB"
                                    color="bg-blue"
                                    background={logoLogo}
                                    texture={true}
                                    bgPositionTop='texture-top-left'
                                    bgPositionBottom='texture-bottom-right'
                                    animateBottom={true}
                                />
                            </AboutWrapper>
                        </div>

                            <div className="row mt-3" data-aos="fade-up">
                                <div className="col-12">

                                    <CardLiniMasa />

                                </div>
                            </div>
                        <Suspense>
                        <div class="row mt-3" data-aos="fade-up">
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
                                    comingsoon = {true}
                                />

                            </div>
                        </div>
                        <div className="row mt-3" data-aos="fade-up">
                            <AboutWrapper className="col-12">

                                <Card
                                    directTo="/AgendaPenugasan"
                                    title="Agenda dan Penugasan"
                                    color="bg-red"
                                    background={penugasan}
                                    texture={true}
                                    bgPositionTop='texture-top-center'
                                    bgPositionBottom='texture-bottom-center'
                                />
                            </AboutWrapper>
                        </div>
                            <Suspense>
                                <div className="row mt-3" data-aos="fade-up" >
                                    <AboutWrapper className="col-12">

                                        <Card
                                            title=''
                                            viewSponsor={sponsor}
                                            color="bg-blue"
                                            background=''
                                            texture={true}
                                            bgPositionTop='texture-top-left'
                                            bgPositionBottom='texture-bottom-right'
                                        />
                                    </AboutWrapper>
                                </div>
                            </Suspense>
                        </Suspense>
                    </div>
                </section>
                </Suspense>
            </Suspense>
        </Fragment>
    )
}

export default SectionB
